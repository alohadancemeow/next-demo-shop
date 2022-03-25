import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'

import CartDrawer from '../components/CartDrawer'
import CustomTabs from '../components/Tabs'

import getCommerce from '../lib/commerce'
import { useCartDispatch, useCartState } from '../context/Store'

const Home = ({ merchant, categories, products }) => {

  const { cart } = useCartState()
  const { setCart } = useCartDispatch()

  console.log(cart);

  // states
  const [open, setOpen] = useState(false)
  const [order, setOrder] = useState({})

  const commerce = getCommerce()

  // cart handlers

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


  if (cart.loading) return 'loading...'

  return (
    <Layout title='Next-Demo-Shop'>
      <NavBar setOpen={setOpen} />
      <Header />
      <CustomTabs
        products={products}
        setOpen={setOpen}
      />
      <CartDrawer
        open={open}
        setOpen={setOpen}
      />
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const commerce = getCommerce();
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}
