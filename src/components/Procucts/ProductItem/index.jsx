import React, { useState } from 'react'
import Image from 'next/image'

import { Button } from '../../Styled-elememts'
import { Card, ImageBox, TextBox, Title, EnterBox, BoxWrapper, BoxDetails, ButtonWrapper, Description } from './styles'

import { Modal } from 'antd'
import { LockOutlined, ShoppingOutlined, CloseCircleOutlined, RightCircleOutlined, PushpinFilled } from '@ant-design/icons'

const ProductItem = ({ item, setOpen }) => {
    // console.log(item);

    // states
    const [enter, setEnter] = useState(false)
    const [visible, setVisible] = useState(false);

    const handleOpen = () => {
        setEnter(false)
        setVisible(true)
    };
    const handleClose = () => setVisible(false);

    const handleOpenCart = () => {
        setOpen(true)
        setVisible(false)
        setEnter(false)
    }


    // create modal
    const ProductModal = () => (
        <Modal
            // title={item.name}
            centered
            visible={visible}
            onOk={handleOpen}
            onCancel={handleClose}
            // width={600}
            footer={null}
            closeIcon={<CloseCircleOutlined />}
        >
            <BoxDetails>
                <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={550}
                    //   layout='fill'
                    priority={true}
                />
                <Description>
                    <span>
                        <PushpinFilled />
                        description:
                    </span>
                    <span>
                        A good book is available now!
                    </span>
                </Description>
                <ButtonWrapper>
                    <Button onClick={handleClose}>
                        <CloseCircleOutlined style={{ fontSize: '18px' }} />
                        <span>Close</span>
                    </Button>
                    {item.inventory
                        ? <Button
                            type='accent'
                            onClick={handleOpenCart}
                        >
                            <ShoppingOutlined style={{ fontSize: '18px' }} />
                            <span>{`Buy ฿${item.price}`}</span>
                        </Button>
                        : <Button type='secondary'>
                            <LockOutlined style={{ fontSize: '18px' }} />
                            <span>Sold Out</span>
                        </Button>
                    }
                </ButtonWrapper>
            </BoxDetails>
        </Modal>
    )

    // create card
    const ProductCard = () => (
        <Card
            onMouseEnter={() => setEnter(true)}
            onMouseLeave={() => setEnter(false)}
        >
            <ImageBox>
                {enter &&
                    <EnterBox>
                        <BoxWrapper>
                            <Button onClick={handleOpen}>
                                Product Details
                            </Button>
                            {item.inventory
                                ? <Button
                                    type='primary'
                                    onClick={handleOpenCart}
                                >
                                    <ShoppingOutlined style={{ fontSize: '18px' }} />
                                    <span>Add to Cart</span>
                                </Button>
                                : <Button type='secondary'>
                                    <LockOutlined style={{ fontSize: '18px' }} />
                                    <span>Sold Out</span>
                                </Button>
                            }
                        </BoxWrapper>
                    </EnterBox>
                }
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

    return (
        <>
            <ProductCard />
            <ProductModal />
        </>
    )
}

export default ProductItem