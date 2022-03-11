import Image from 'next/image'
import React from 'react'

import { Container, Logo, Title, Subtitle } from './styles'

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
        </Container>
    )
}

export default Header