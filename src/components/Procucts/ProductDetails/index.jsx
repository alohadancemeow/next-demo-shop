import React from 'react'
import Router from 'next/router';
import { stripHtml } from 'string-strip-html'

import { ShoppingOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { PageHeader, Card, Button, Tag } from 'antd';

import { Container, ContentWrapper, StyledImage, Content, Header, Title, Subtitle, CardWrapper } from './styles'

const ProductDetails = ({ product }) => {

    console.log(product);

    const { id, name, description, price, image, inventory } = product
    const { result } = stripHtml(description)


    return (
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
                                <Tag icon={<CheckCircleOutlined />} color="cyan" style={{ width: 'fit-content' }}>
                                    Available: {inventory.available}
                                </Tag>

                                <Button
                                    size='middle'
                                    type='primary'
                                    icon={<ShoppingOutlined style={{ fontSize: '16px' }} />}
                                    style={{ marginTop: '30px' }}
                                >
                                    Buy now {price.formatted_with_symbol}
                                </Button>
                            </Content>
                        </ContentWrapper>
                    </Card>
                </CardWrapper>
            </PageHeader>
        </Container>
    )
}

export default ProductDetails