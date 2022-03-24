import React, { useState, useEffect } from 'react'

import { Drawer, Steps, Table, message, Image as AntdImage, Popconfirm, Form, Input } from 'antd'
import { CloseCircleOutlined, TagsOutlined, WalletOutlined, CreditCardOutlined, RightCircleOutlined, LeftCircleOutlined, PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons'

import { ContainerWrapper, ContentWrapper, ButtontWrapper, Content, TableWrapper, TableFooter, FormWrapper, EditPriceBox } from './styles'
import { StyledButton } from '../Styled-elememts'

import getCommerce from '../../lib/commerce'

const { Step } = Steps;

const CartDrawer = ({ open, setOpen, current, setCurrent, next, back, cart, handleRemoveFromCart, handleUpdateCartQty, handleCaptureCheckout }) => {

    // states
    const [width, setWidth] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)

    const { line_items, subtotal } = cart

    // check for innerWidth
    const isMobile = width <= 578 ? true : false

    // data for table
    const dataSource = []
    cart && cart.line_items && cart.line_items.map(item => (
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
                    <a onClick={() => {
                        handleUpdateCartQty(record.key, record.qty + 1)
                        message.success('Successfully updated')
                    }}>
                        <PlusSquareOutlined style={{ fontSize: '16px' }} />
                    </a>
                    {record.qty}
                    <a onClick={() => {
                        handleUpdateCartQty(record.key, record.qty - 1)
                        message.success('Successfully updated')
                    }}>
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

    // # Content 1 --> Cart table
    const CartTable = () => (
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
                        <span>{subtotal.formatted_with_symbol}</span>
                    </TableFooter>
                )}
            />
        </TableWrapper>
    )

    // # Content 2 --> Bill address form

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const BillAdressForm = () => (
        <FormWrapper>
            <Form
                size='middle'
                layout='vertical'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                id='form'
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input
                        placeholder='alohadancemeow'
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input
                        placeholder='alohadancemeow@gmail.com'
                    />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        placeholder='0123456789'
                    />
                </Form.Item>
            </Form>
        </FormWrapper>
    )


    // create steps
    const steps = [
        {
            title: 'Items',
            content: <CartTable />,
            icon: <TagsOutlined />
        },
        // {
        //     title: 'Bill Address',
        //     content: <BillAdressForm />,
        //     icon: <WalletOutlined />
        // },
        {
            title: 'Payment',
            content: 'Last-content',
            icon: <CreditCardOutlined />
        },
    ];

    // console.log(steps.length - 1);


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


    // generate checkout token 
    useEffect(() => {
        const generateToken = async () => {

            const commerce = getCommerce()

            let getToken

            if (!checkoutToken) {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
                    console.log('token', token);
                    setCheckoutToken(token)
                } catch (error) {
                    console.log(error);
                    // navigate('/')
                }
            }

            if (checkoutToken) {
                getToken = await commerce.checkout.getToken(checkoutToken.id)
                console.log('getToken', getToken);
            }

        }

        open && cart && cart.line_items && generateToken()
    }, [open])


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
                        {!line_items
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
                        htmlType='submit'
                        form='form'
                        size='large'
                        variant='accent'
                        icon={<RightCircleOutlined />}
                        onClick={handleNext}
                        disabled={line_items && line_items.length >= 1 ? false : true}
                    >
                        Checkout
                    </StyledButton>
                </ButtontWrapper>
            </ContainerWrapper>
        </Drawer>

    )
}

export default CartDrawer