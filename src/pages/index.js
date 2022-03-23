import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'

import book from '../../public/book.jpg'
import CartDrawer from '../components/CartDrawer'
import CustomTabs from '../components/Tabs'

import { commerce } from '../lib/commerce'
// fake data
export const fakeData = [
  { id: '1', image: book, name: 'item-1', qty: 10, inventory: 0, price: '10.00' },
  { id: '2', image: book, name: 'item-2', qty: 10, inventory: 10, price: '10.00' },
  { id: '3', image: book, name: 'item-3', qty: 10, inventory: 10, price: '10.00' },
  { id: '4', image: book, name: 'item-4', qty: 10, inventory: 10, price: '10.00' },
]

const Home = () => {

  // states
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  // Commerce states
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})

  // get products
  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }
  // get cart
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }

  // cart handlers
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity)
    setCart(cart)
  }
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
  }
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity })
    setCart(cart)
  }
  // Refresh the cart and update the cart state
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()
    setCart(newCart)
  }

  // Capture the checkout
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const order = commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(order)
      refreshCart()
    } catch (error) {
      console.log(error);
    }
  }


  // console.log(products);
  // console.log(cart);

  // next step
  const next = () => {
    setCurrent(current + 1);
  };

  // back step
  const back = () => {
    setCurrent(current - 1);
  };

  // EFFECT:
  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <Layout>
      <NavBar setOpen={setOpen} cart={cart} />
      <Header />
      <CustomTabs
        products={products}
        setOpen={setOpen}
        handleAddToCart={handleAddToCart}
      />
      <CartDrawer
        open={open}
        setOpen={setOpen}
        current={current}
        setCurrent={setCurrent}
        next={next}
        back={back}
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleUpdateCartQty={handleUpdateCartQty}
        handleCaptureCheckout={handleCaptureCheckout}
      />
    </Layout>
  )
}

export default Home
