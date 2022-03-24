import React, { createContext, useContext, useEffect, useReducer } from 'react'
import getCommerce from '../lib/commerce'
import { CART_RETRIEVE_REQUEST, CART_RETRIEVE_SUCCESS, ORDER_SET } from './constants'

// create context
const StoreContext = createContext()
const StoreDispatch = createContext()

// create initialstate
const innitailState = {
    cart: { loading: true },
    order: typeof window !== 'undefined' && window.localStorage.getItem('order_receipt')
        ? JSON.parse(window.localStorage.getItem('order_receipt'))
        : null
}

// create reducers
const reducer = (state, action) => {
    switch (action.type) {
        case CART_RETRIEVE_REQUEST:
            return {
                ...state,
                cart: { loading: true }
            }
        case CART_RETRIEVE_SUCCESS: {
            return {
                ...state,
                cart: { loading: false, data: { ...action.payload } }
            }
        }
        case ORDER_SET: {
            return {
                ...state,
                order: action.payload
            }
        }
        default:
            return state
    }
}

// create provider
export const StoreProvider = ({ children, commercePublicKey }) => {
    const [state, dispatch] = useReducer(reducer, innitailState)

    const setCart = (payload) => dispatch({ type: CART_RETRIEVE_SUCCESS, payload })

    const getCart = async () => {
        try {
            const commerce = getCommerce(commercePublicKey)
            dispatch({ type: CART_RETRIEVE_REQUEST })
            const cart = await commerce.cart.retrieve()
            setCart(cart)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCart()
    }, [])

    return (
        <StoreDispatch.Provider value={{ setCart }}>
            <StoreContext.Provider value={state}>
                {children}
            </StoreContext.Provider>
        </StoreDispatch.Provider>
    )
}

// export context
export const useCartState = () => useContext(StoreContext)
export const useCartDispatch = () => useContext(StoreDispatch)