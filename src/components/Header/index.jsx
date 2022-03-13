import Image from 'next/image'
import React from 'react'

import { Container, Logo, Title, Subtitle, CartIcon } from './styles'
import { AiOutlineAccountBook } from 'react-icons/ai'

const Header = () => {
    return (
        <Container>
            <Logo>
                <Image
                    src='/image3.gif'
                    alt='image'
                    layout='fill'
                    priority={true}
                />
            </Logo>
            <Title>I will have order</Title>
            <Subtitle>From a buyer, now a seller.</Subtitle>
            {/* <CartIcon>
                <AiOutlineAccountBook  size={50}/>
            </CartIcon> */}
        </Container>
    )
}

export default Header