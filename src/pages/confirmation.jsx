import React from 'react'
import ConfirmarionBox from '../components/ConfirmationBox'

import { useCartState } from '../context/Store'

const ConfirmationPage = () => {

    const { order } = useCartState()
    // console.log(order);

    return (
        <ConfirmarionBox order={order} />
    )
}

export default ConfirmationPage