import React from 'react'
import { useCartState } from '../../context/Store'

import { Container, CartIcon, Text } from './styles'
import { AccountBookOutlined } from '@ant-design/icons'

const NavBar = ({ setOpen }) => {

    const { cart } = useCartState()

    const noItem = cart && cart.data.total_items >= 1 ? false : true
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