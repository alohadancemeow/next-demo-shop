import React from 'react'

import ProductItem from './ProductItem'
import { Container } from './styles'

const Products = ({ products, setOpen }) => {

    // console.log(products);

    return (
        <Container>
            {products.map(item => (
                <ProductItem
                    key={item.id}
                    item={item}
                    setOpen={setOpen}
                />
            ))}
        </Container>
    )
}

export default Products