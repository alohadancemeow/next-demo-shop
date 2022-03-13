import React, { useState } from 'react'
import Image from 'next/image'

import { AiOutlineLock, AiOutlineShopping } from 'react-icons/ai'
import { Button } from '../../Styled-elememts'
import { Card, ImageBox, TextBox, Title, EnterBox, BoxWrapper } from './styles'

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
                        {item.inventory
                            ? <Button type='primary'>
                                <AiOutlineShopping size={20} />
                                <span>Add to Cart</span>
                            </Button>
                            : <Button type='secondary'>
                                <AiOutlineLock size={20} />
                                <span>Sold Out</span>
                            </Button>
                        }
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
                <Title>
                    {item.inventory
                        ? `(qty: ${item.inventory})`
                        : `(Sold Out)`
                    }
                </Title>
                <Title>{item.price}</Title>
            </TextBox>



        </Card>
    )
}

export default ProductItem