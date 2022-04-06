import React, { useContext, useState } from 'react'
import Router from 'next/router';
import { stripHtml } from 'string-strip-html'

import Layout from '../../Layout';
import { PageHeader, Card, Button, Tag, message } from 'antd';
import { ShoppingOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { Container, ContentWrapper, StyledImage, Content, Header, Title, Subtitle, CardWrapper } from './styles'

import getCommerce from '../../../lib/commerce';
import { useCartDispatch } from '../../../context/Store'
import { GlobalContext } from '../../../context/GlobalContext'

const ProductDetails = ({ product }) => {

    const [loading, setLoading] = useState(false)

    const commerce = getCommerce()

    // context
    const { setCart } = useCartDispatch()
    const { setOpen } = useContext(GlobalContext)

    const { id, name, description, price, image, inventory } = product
    const { result } = stripHtml(description)


    const handleAddToCart = async (productId, quantity) => {
        setLoading(true)
        const { cart } = await commerce.cart.add(productId, quantity)
        setCart(cart)
        setOpen(true)
        message.success('Item added')
        setLoading(false)
    }


    return (
        <Layout title={`I will have order - ${name}`}>
            <Container>
                <PageHeader
                    className="site-page-header"
                    onBack={() => Router.push('/')}
                    title={product.name}
                >
                    <CardWrapper>
                        <Card hoverable >
                            <ContentWrapper>
                                <StyledImage
                                    alt={id}
                                    src={image.url}
                                />

                                <Content>
                                    <Header>Product Details</Header>
                                    <Title>{name}</Title>
                                    <Subtitle>{result}</Subtitle>

                                    <div>
                                        {inventory.available
                                            ? <Tag icon={<CheckCircleOutlined />} color="cyan" style={{ width: 'fit-content' }}>
                                                Available: {inventory.available}
                                            </Tag>
                                            : <Tag icon={<CloseCircleOutlined />} color="error" style={{ width: 'fit-content' }}>
                                                Sold out
                                            </Tag>
                                        }
                                    </div>

                                    <Button
                                        size='large'
                                        type='primary'
                                        disabled={!inventory.available}
                                        icon={<ShoppingOutlined style={{ fontSize: '16px' }} />}
                                        style={{ marginTop: '30px' }}
                                        onClick={() => {
                                            handleAddToCart(id, 1)
                                        }}
                                        loading={loading}
                                    >
                                        Buy now {price.formatted_with_symbol}
                                    </Button>
                                </Content>
                            </ContentWrapper>
                        </Card>
                    </CardWrapper>
                </PageHeader>
            </Container>
        </Layout>
    )
}

export default ProductDetails