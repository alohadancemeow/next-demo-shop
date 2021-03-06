import React from 'react'
import CartDrawer from '../components/CartDrawer'

import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import CustomTabs from '../components/Tabs'

import getCommerce from '../lib/commerce'


const Home = ({ merchant, categories, products }) => {

  return (
    <Layout title='I will have order'>
      <NavBar />
      <CartDrawer />
      <Header />
      <CustomTabs products={products} />
    </Layout>
  )
}

export default Home

export const getServerSideProps = async () => {
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
