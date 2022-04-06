import React from 'react'
import ConfirmarionBox from '../components/ConfirmationBox'

import Layout from '../components/Layout'

import { useCartState } from '../context/Store'

const ConfirmationPage = () => {

    const { order } = useCartState()
    // console.log(order);

    return (
        <Layout title='I will have order - Confirmation'>
            <ConfirmarionBox order={order} />
        </Layout>
    )
}

export default ConfirmationPage