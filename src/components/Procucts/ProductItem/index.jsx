import React from 'react'
import Image from 'next/image'

import { ImageBox, TextBox, Title } from './styles'

const ProductItem = ({ item }) => {
    console.log(item);

    return (
        <>
            <ImageBox>
                <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={200}
                    // layout='fill'
                    priority={true}
                />
            </ImageBox>
            <TextBox>
                <Title>{item.name}</Title>
                <Title>{`(qty: ${item.inventory})`}</Title>
                <Title>{item.price}</Title>
            </TextBox>
        </>
    )
}

export default ProductItem