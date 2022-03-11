import React, { useState } from 'react'

import ProductItem from './ProductItem'
import { Container, Card } from './styles'

const Products = ({ products }) => {

    console.log(products);

    return (
        <Container>
            {products.map(item => (
                <Card key={item.id}>
                    <ProductItem item={item} />
                </Card>
            ))}
        </Container>
    )
}

export default Products