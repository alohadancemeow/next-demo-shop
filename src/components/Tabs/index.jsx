import React from 'react'
import { Tabs } from 'antd';

import Products from '../Procucts';

const { TabPane } = Tabs;

const CustomTabs = ({ products, setOpen }) => {
    // console.log(products);

    // filtering by category
    const mangaProducts = products && products.filter(({ categories: [{ slug }] }) => slug === 'manga')
    const novelProducts = products && products.filter(({ categories: [{ slug }] }) => slug === 'novel')
    // console.log(nftProducts);

    return (
        <Tabs defaultActiveKey="1" centered size='small'>
            <TabPane tab="ALL" key="1">
                <Products
                    products={products}
                    setOpen={setOpen}
                />
            </TabPane>
            <TabPane tab="MANGA" key="2">
                <Products
                    products={mangaProducts}
                    setOpen={setOpen}
                />
            </TabPane>
            <TabPane tab="NOVEL" key="3">
                <Products
                    products={novelProducts}
                    setOpen={setOpen}
                />
            </TabPane>
        </Tabs>
    )
}

export default CustomTabs