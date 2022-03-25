import React from 'react'
import { Table, message, Image as AntdImage, Popconfirm } from 'antd'
import { CloseCircleOutlined, PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons'

import { TableWrapper, TableFooter, EditPriceBox } from './styles'

import getCommerce from '../../lib/commerce'
import { useCartDispatch, useCartState } from '../../context/Store'

const CartTable = ({ isMobile }) => {

    const commerce = getCommerce()

    // use context
    const { cart: { data } } = useCartState()
    const { setCart } = useCartDispatch()

    // Update cart qty
    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity })
        setCart(cart)
        message.success('Successfully updated')
    }
    // Remove cart item
    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId)
        setCart(cart)
        message.success('Item deleted')
    }

    // data for table
    const dataSource = []
    data && data.line_items && data.line_items.map(item => (
        dataSource.push({
            key: item.id,
            image: <AntdImage src={item.image.url} alt={item.name} preview={false} width={50} />,
            name: item.name,
            qty: item.quantity,
            price: item.price.formatted_with_symbol
        })
    ))

    // columns for table
    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            key: 'qty',
            render: (_, record) => (
                <EditPriceBox>
                    <a onClick={() => handleUpdateCartQty(record.key, record.qty + 1)}>
                        <PlusSquareOutlined style={{ fontSize: '16px' }} />
                    </a>
                    {record.qty}
                    <a onClick={() => handleUpdateCartQty(record.key, record.qty - 1)}>
                        <MinusSquareOutlined style={{ fontSize: '16px' }} />
                    </a>
                </EditPriceBox >
            )
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            key: 'delete',
            render: (_, record) => (
                dataSource.length >= 1
                    ? (
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => handleRemoveFromCart(record.key)}
                        >
                            <CloseCircleOutlined style={{ fontSize: '18px', color: 'red' }} />
                        </Popconfirm>
                    ) : null
            )
        }
    ];

    return (
        <TableWrapper>
            <Table
                // size='middle'
                dataSource={dataSource}
                columns={columns}
                showHeader={false}
                pagination={false}
                // pagination={{ pageSize: 5 }}
                scroll={{ y: isMobile ? 250 : 600 }}
                footer={() => (
                    <TableFooter>
                        <span>Total</span>
                        <span>{data.subtotal.formatted_with_symbol}</span>
                    </TableFooter>
                )}
            />
        </TableWrapper>
    )
}

export default CartTable