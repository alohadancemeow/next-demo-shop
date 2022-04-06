import React from 'react'
import Link from 'next/link'

import ProductItem from './ProductItem'
import { Container } from './styles'

const Products = ({ products }) => {

    // console.log(products);

    return (
        <Container>
            {products.map(item => (
                <Link key={item.id} href={`/products/${item.permalink}`}>
                    <a>
                        <ProductItem
                            item={item}
                        />
                    </a>
                </Link>
            ))}
        </Container>
    )
}

export default Products