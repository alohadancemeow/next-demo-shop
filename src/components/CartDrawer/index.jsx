import React, { useState, useEffect } from 'react'

import { Drawer, Steps, Table, message, Image as AntdImage, Popconfirm } from 'antd'
import { CloseCircleOutlined, TagsOutlined, WalletOutlined, CreditCardOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'

import { ContainerWrapper, ContentWrapper, ButtontWrapper, Content, TableWrapper, TableFooter } from './styles'
import { StyledButton } from '../Styled-elememts'

import { fakeData as item } from '../../pages'


const CartDrawer = ({ open, setOpen, current, setCurrent, next, back }) => {

    const [width, setWidth] = useState(0)

    const { Step } = Steps;

    // check for innerWidth
    const isMobile = width <= 578 ? true : false

    // data for table
    const dataSource = [
        {
            key: '1',
            image: <AntdImage src={item[0].image.src} preview={false} width={50} />,
            name: `${item[0].name}`,
            qty: `${item[0].qty}`,
            price: `฿${(item[0].price * item[0].qty).toFixed(2)}`,
        },
        {
            key: '2',
            image: <AntdImage src={item[0].image.src} preview={false} width={50} />,
            name: 'John',
            qty: 42,
            price: '฿10.00',
        },
        {
            key: '3',
            image: <AntdImage src={item[0].image.src} preview={false} width={50} />,
            name: 'John',
            qty: 42,
            price: '฿10.00',
        },
        {
            key: '4',
            image: <AntdImage src={item[0].image.src} preview={false} width={50} />,
            name: 'John',
            qty: 42,
            price: '฿10.00',
        },
        // {
        //     key: '4',
        //     image: <AntdImage src={item[0].image.src} preview={false} width={50} />,
        //     name: 'John',
        //     qty: 42,
        //     price: '฿10.00',
        // },
        // {
        //     key: '4',
        //     image: <AntdImage src={item[0].image.src} preview={false} width={50} />,
        //     name: 'John',
        //     qty: 42,
        //     price: '฿10.00',
        // },
        // {
        //     key: '4',
        //     image: <AntdImage src={item[0].image.src} preview={false} width={50} />,
        //     name: 'John',
        //     qty: 42,
        //     price: '฿10.00',
        // },
        // {
        //     key: '4',
        //     image: <AntdImage src={item[0].image.src} preview={false} width={50} />,
        //     name: 'John',
        //     qty: 42,
        //     price: '฿10.00',
        // },
    ];

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
                            onConfirm={() => { }}
                        >
                            <a><CloseCircleOutlined style={{ fontSize: '18px', color: 'red' }} /></a>
                        </Popconfirm>
                    ) : null
            )
        }
    ];

    const CartTable = () => (
        <TableWrapper>
            <Table
                dataSource={dataSource}
                columns={columns}
                showHeader={false}
                pagination={false}
                // pagination={{ pageSize: 5 }}
                scroll={{ y: isMobile ? 250 : 600 }}
                footer={() => (
                    <TableFooter>
                        <span>Total</span>
                        <span>฿1000.00</span>
                    </TableFooter>
                )}
            />
        </TableWrapper>
    )


    // create steps
    const steps = [
        {
            title: 'Items',
            content: <CartTable />,
            icon: <TagsOutlined />
        },
        {
            title: 'Bill Address',
            content: 'Content B',
            icon: <WalletOutlined />
        },
        {
            title: 'Payment',
            content: 'Last-content',
            icon: <CreditCardOutlined />
        },
    ];


    // handlers
    const handleNext = () => {
        if (current < steps.length - 1) next()
        if (current === steps.length - 1) {
            message.success('Processing complete!')
            setCurrent(0)
            setOpen(false)
        }
    }

    const handleBack = () => {
        current > 0 ? back() : setOpen(false)
    }

    // or use @react-hook/window-size
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [setWidth])

    return (
        <Drawer
            title="Your Cart"
            placement="right"
            onClose={() => setOpen(false)}
            visible={open}
            width={isMobile ? '100%' : 500}

            closeIcon={<CloseCircleOutlined />}
        >
            <ContainerWrapper >
                <ContentWrapper>
                    <Steps size='small' current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} icon={item.icon} />
                        ))}
                    </Steps>

                    <Content>
                        {!item
                            ? <p>No item</p>
                            : <>
                                {steps[current].content}
                            </>
                        }
                    </Content>
                </ContentWrapper>

                <ButtontWrapper>
                    <StyledButton
                        size='large'
                        icon={
                            current > 0
                                ? <LeftCircleOutlined />
                                : <CloseCircleOutlined />
                        }
                        onClick={handleBack}
                    >
                        {current > 0 ? 'Back' : 'Close'}
                    </StyledButton>
                    <StyledButton
                        size='large'
                        variant='accent'
                        icon={<RightCircleOutlined />}
                        onClick={handleNext}
                    >
                        Next
                    </StyledButton>
                </ButtontWrapper>
            </ContainerWrapper>
        </Drawer>

    )
}

export default CartDrawer