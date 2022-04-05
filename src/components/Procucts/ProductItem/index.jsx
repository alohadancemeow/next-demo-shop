import React, { useState } from 'react'
import Image from 'next/image'
import { stripHtml } from 'string-strip-html'
import getCommerce from '../../../lib/commerce'
import { useCartDispatch } from '../../../context/Store'

import { StyledButton } from '../../Styled-elememts'
import { Card, ImageBox, TextBox, Title, EnterBox, BoxWrapper, BoxDetails, ButtonWrapper, Description } from './styles'

import { Modal, message } from 'antd'
import { LockOutlined, ShoppingOutlined, CloseCircleOutlined, RightCircleOutlined, PushpinFilled } from '@ant-design/icons'

import Router from 'next/router'

const ProductItem = ({ item, setOpen }) => {

    const commerce = getCommerce()

    // states
    const [enter, setEnter] = useState(false)
    const [visible, setVisible] = useState(false);
    // console.log(enter, visible);

    const { setCart } = useCartDispatch()

    // get product's info, strip the html tag
    const {
        id,
        name,
        description,
        price: { formatted_with_symbol },
        inventory: { available },
        image: { url },
    } = item
    const { result } = stripHtml(description)

    // handlers
    const handleOpen = () => {
        setEnter(false)
        // setVisible(true)

        Router.push(`/products/${item.permalink}`)
    };
    const handleClose = () => setVisible(false);

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity)
        setCart(cart)
        message.success('Item added')
    }

    const handleOpenCart = () => {
        setOpen(true)
        setVisible(false)
        setEnter(false)

        handleAddToCart(id, 1)
    }


    // create product item modal
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
                    src={url}
                    alt={name}
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
                    <span>{result}</span>
                </Description>
                <ButtonWrapper>
                    <StyledButton
                        size='large'
                        onClick={handleClose}
                        icon={<CloseCircleOutlined />}
                    >
                        Close
                    </StyledButton>
                    {available
                        ? <StyledButton
                            size='large'
                            variant='accent'
                            icon={<ShoppingOutlined />}
                            onClick={handleOpenCart}
                        >
                            {`Buy ${formatted_with_symbol}`}
                        </StyledButton>
                        : <StyledButton
                            size='large'
                            variant='secondary'
                            icon={<LockOutlined />}
                            disabled
                        >
                            Sold Out
                        </StyledButton>
                    }
                </ButtonWrapper>
            </BoxDetails>
        </Modal>
    )

    // create product item card
    const ProductCard = () => (
        <Card
            onMouseEnter={() => setEnter(true)}
            onMouseLeave={() => setEnter(false)}
        >
            <ImageBox>
                {enter &&
                    <EnterBox>
                        <BoxWrapper>
                            <StyledButton
                                size='large'
                                onClick={handleOpen}
                            >
                                Product Details
                            </StyledButton>
                            {available
                                ? <StyledButton
                                    size='large'
                                    variant='primary'
                                    icon={<ShoppingOutlined />}
                                    onClick={handleOpenCart}
                                >
                                    Add to Cart
                                </StyledButton>
                                : <StyledButton
                                    size='large'
                                    variant='secondary'
                                    icon={<LockOutlined />}
                                    disabled
                                >
                                    Sold Out
                                </StyledButton>
                            }
                        </BoxWrapper>
                    </EnterBox>
                }
                <Image
                    src={url}
                    alt={name}
                    width={150}
                    height={200}
                    // layout='fill'
                    priority={true}
                />
            </ImageBox>
            <TextBox>
                <Title>{name}</Title>
                <Title>
                    {available
                        ? `(qty: ${available})`
                        : `(Sold Out)`
                    }
                </Title>
                <Title>{formatted_with_symbol}</Title>
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