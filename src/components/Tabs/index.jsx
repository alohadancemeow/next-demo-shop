import React from 'react'
import { Tabs } from 'antd';

import Products from '../Procucts';

const { TabPane } = Tabs;

const CustomTabs = ({ products, setOpen, handleAddToCart }) => {
    // console.log(products);

    // filtering by category
    const bookProducts = products && products.filter(({ categories: [{ slug }] }) => slug === 'book')
    const nftProducts = products && products.filter(({ categories: [{ slug }] }) => slug === 'nft')
    // console.log(nftProducts);

    return (
        <Tabs defaultActiveKey="1" centered size='small'>
            <TabPane tab="ALL" key="1">
                <Products
                    products={products}
                    setOpen={setOpen}
                />
            </TabPane>
            <TabPane tab="BOOKS" key="2">
                <Products
                    products={bookProducts}
                    setOpen={setOpen}
                />
            </TabPane>
            <TabPane tab="NFT" key="3">
                <Products
                    products={nftProducts}
                    setOpen={setOpen}
                />
            </TabPane>
        </Tabs>
    )
}

export default CustomTabs