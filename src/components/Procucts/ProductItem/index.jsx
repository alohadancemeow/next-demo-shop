import React, { useState } from 'react'
import Image from 'next/image'

import { StyledButton } from '../../Styled-elememts'
import { Card, ImageBox, TextBox, Title, EnterBox, BoxWrapper, BoxDetails, ButtonWrapper, Description } from './styles'

import { Modal } from 'antd'
import { LockOutlined, ShoppingOutlined, CloseCircleOutlined, RightCircleOutlined, PushpinFilled } from '@ant-design/icons'

const ProductItem = ({ item, setOpen }) => {
    // console.log(item);

    // states
    const [enter, setEnter] = useState(false)
    const [visible, setVisible] = useState(false);
    // console.log(enter, visible);

    // handlers
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
                    <StyledButton
                        size='large'
                        onClick={handleClose}
                        icon={<CloseCircleOutlined />}
                    >
                        Close
                    </StyledButton>
                    {item.inventory
                        ? <StyledButton
                            size='large'
                            variant='accent'
                            icon={<ShoppingOutlined />}
                            onClick={handleOpenCart}
                        >
                            {`Buy ฿${item.price}`}
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
                            {item.inventory
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