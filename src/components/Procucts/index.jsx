import React, { useState } from 'react'

import ProductItem from './ProductItem'
import { Container } from './styles'

const Products = ({ products }) => {

    // console.log(products);

    return (
        <Container>
            {products.map(item => (
                <ProductItem key={item.id} item={item} />
            ))}
        </Container>
    )
}

export default Products