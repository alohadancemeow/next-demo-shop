import React, { useState } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Products from '../components/Procucts'

import book from '../../public/book.jpg'

// fake data
const fakeData = [
  { id: '1', image: book, name: 'item-1', qty: 10, inventory: 0, price: '10.00' },
  { id: '2', image: book, name: 'item-2', qty: 10, inventory: 10, price: '10.00' },
  { id: '3', image: book, name: 'item-3', qty: 10, inventory: 10, price: '10.00' },
  { id: '4', image: book, name: 'item-4', qty: 10, inventory: 10, price: '10.00' },
]

const Home = () => {


  return (
    <Layout>
      {/* <NavBar /> */}
      <Header />
      <Products products={fakeData} />
    </Layout>
  )
}

export default Home
