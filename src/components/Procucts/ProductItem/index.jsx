import React, { useState } from 'react'
import Image from 'next/image'

import { Card, ImageBox, TextBox, Title, EnterBox, BoxWrapper, Button } from './styles'

const ProductItem = ({ item }) => {
    // console.log(item);

    const [enter, setEnter] = useState(false)
    console.log(enter);

    return (
        <Card
            onMouseEnter={() => setEnter(true)}
            onMouseLeave={() => setEnter(false)}
        >
            <ImageBox enter={enter}>
                <EnterBox enter={enter}>
                    <BoxWrapper>
                        <Button>Product Details</Button>
                        <Button color='primary'>Add to cart</Button>
                    </BoxWrapper>
                </EnterBox>
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



        </Card>
    )
}

export default ProductItem