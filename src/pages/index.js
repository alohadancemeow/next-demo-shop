import React, { useState } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Products from '../components/Procucts'

import book from '../../public/book.jpg'
import CartDrawer from '../components/CartDrawer'

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

  // next step
  const next = () => {
    setCurrent(current + 1);
  };

  // back step
  const back = () => {
    setCurrent(current - 1);
  };

  return (
    <Layout>
      <NavBar setOpen={setOpen} />
      <Header />
      <Products products={fakeData} setOpen={setOpen} />
      <CartDrawer
        open={open}
        setOpen={setOpen}
        current={current}
        setCurrent={setCurrent}
        next={next}
        back={back}
      />
    </Layout>
  )
}

export default Home
