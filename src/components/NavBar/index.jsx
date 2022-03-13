import React from 'react'

import { Container, CartIcon, Text } from './styles'
import { AiOutlineAccountBook } from 'react-icons/ai'

const NavBar = () => {
    return (
        <Container>
            <CartIcon>
                <AiOutlineAccountBook size={50} />
                <Text>0 Items</Text>
            </CartIcon>
        </Container>
    )
}

export default NavBar