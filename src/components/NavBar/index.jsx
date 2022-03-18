import React from 'react'

import { Container, CartIcon, Text } from './styles'
import { AccountBookOutlined } from '@ant-design/icons'

const NavBar = ({ setOpen, cart }) => {
    return (
        <Container>
            <CartIcon onClick={() => setOpen(true)}>
                <AccountBookOutlined className='cart-icon' />
                <Text>{cart.total_items ? cart.total_items : 0} Items</Text>
            </CartIcon>
        </Container>
    )
}

export default NavBar