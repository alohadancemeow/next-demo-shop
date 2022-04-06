import React from 'react'
import Router from 'next/router'
import Image from 'next/image'

import { Card } from 'antd'
import { CardWrapper, ImageBox, TextBox, Title } from './styles'

const { Meta } = Card;

const ProductItem = ({ item }) => {
    // console.log(item);

    const {
        id,
        name,
        permalink,
        price: { formatted_with_symbol },
        inventory: { available },
        image: { url },
    } = item


    return (
        <CardWrapper>
            <Card
                hoverable
            // onClick={() => Router.push(`/products/${permalink}`)}
            >
                <ImageBox>
                    <Image
                        src={url}
                        alt={id}
                        width={150}
                        height={200}
                        // layout='fill'
                        priority={true}
                    />
                </ImageBox>
                {/* <TextBox>
                    <Title>{name}</Title>
                    <Title>{available ? formatted_with_symbol : 'Sold out'}</Title>
                </TextBox> */}
                <Meta
                    style={{ textAlign: 'center' }}
                    title={name}
                    description={available ? formatted_with_symbol : 'Sold out'}
                />
            </Card>
        </CardWrapper>
    )
}

export default ProductItem