import React, { useState, useEffect } from 'react'
import getCommerce from '../lib/commerce'
import { useCartState } from '../context/Store'

import Layout from '../components/Layout'
import CheckoutPage from '../components/Chckout'


const Checkout = () => {

    const commerce = getCommerce()

    // use context
    const { cart: { data } } = useCartState()

    // states
    const [checkoutToken, setCheckoutToken] = useState(null)

    // generate checkout token 
    useEffect(() => {

        let getToken

        const generateToken = async () => {

            if (!checkoutToken) {
                try {
                    getToken = await commerce.checkout.generateToken(data.id, { type: 'cart' })
                    console.log('token', getToken);
                    setCheckoutToken(getToken)
                } catch (error) {
                    console.log(error);
                    // navigate('/')
                }
            }

            if (checkoutToken) {
                getToken = await commerce.checkout.getToken(checkoutToken.id)
                console.log('getToken', getToken);
            }

        }

        data && data.line_items && generateToken()
    }, [])

    return (
        <Layout title='Next-Checkout'>
            <CheckoutPage
                data={data}
                checkoutToken={checkoutToken}
            />
        </Layout>
    )
}

export default Checkout