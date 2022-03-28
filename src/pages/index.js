import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import CartDrawer from '../components/CartDrawer'
import CustomTabs from '../components/Tabs'
import { Spinner } from '../components/Styled-elememts'

import getCommerce from '../lib/commerce'
import { useCartState } from '../context/Store'

const Home = ({ merchant, categories, products }) => {

  const { cart } = useCartState()

  console.log(cart);

  // states
  const [open, setOpen] = useState(false)

  if (cart.loading) return <Spinner>Loading...</Spinner>

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
