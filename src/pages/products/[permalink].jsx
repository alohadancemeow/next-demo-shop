import React from 'react'

import getCommerce from '../../lib/commerce';
const commerce = getCommerce()

import ProductDetails from '../../components/Procucts/ProductDetails'

const ProducItemPage = ({ product }) => {

    return (
        <ProductDetails product={product} />
    )
}

export default ProducItemPage


export const getStaticPaths = async () => {
    const { data: products } = await commerce.products.list()
    const paths = products.map((product) => ({
        params: {
            permalink: product.permalink
        },
    }))

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async ({ params }) => {
    const { permalink } = params
    const product = await commerce.products.retrieve(permalink, {
        type: 'permalink',
    });

    return {
        props: {
            product,
        },
    };
}