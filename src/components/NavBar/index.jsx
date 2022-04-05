import React, { useContext } from 'react'
import { useCartState } from '../../context/Store'

import { Container, CartIcon, Text } from './styles'
import { AccountBookOutlined } from '@ant-design/icons'

import { GlobalContext } from '../../context/GlobalContext'


const NavBar = () => {

    // store context
    const { cart } = useCartState()

    // global context
    const { setOpen } = useContext(GlobalContext)

    const noItem = cart && cart.data && cart.data.total_items >= 1 ? false : true
    // console.log(noItem);

    return (
        <Container>
            <CartIcon noItem={noItem} onClick={() => setOpen(true)}>
                <AccountBookOutlined className='cart-icon' />
                <Text>{noItem ? 0 : cart.data.total_items} Items</Text>
            </CartIcon>
        </Container>
    )
}

export default NavBar