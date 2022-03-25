import React, { useState, useEffect } from 'react'

import { Drawer, Steps, message, Form, Input } from 'antd'
import { CloseCircleOutlined, TagsOutlined, WalletOutlined, CreditCardOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'

import { ContainerWrapper, ContentWrapper, ButtontWrapper, Content, FormWrapper } from './styles'
import { StyledButton } from '../Styled-elememts'
import CartTable from './CartTable'

import getCommerce from '../../lib/commerce'
import { useCartState } from '../../context/Store'


const { Step } = Steps;

const CartDrawer = ({ open, setOpen, current, setCurrent, next, back, handleCaptureCheckout }) => {

    const commerce = getCommerce()

    // states
    const [width, setWidth] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)

    // use context
    const { cart: { data } } = useCartState()

    // check for innerWidth
    const isMobile = width <= 578 ? true : false


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
            content: <CartTable isMobile={isMobile} />,
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
            setCurrent(0)
            setOpen(false)
            message.success('Processing complete!')
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

        let getToken

        const generateToken = async () => {

            if (!checkoutToken) {
                try {
                    getToken = await commerce.checkout.generateToken(data.id, { type: 'cart' })
                    console.log('token', getToken);
                    setCheckoutToken(getToken)
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

        open && data && data.line_items && generateToken()
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
                        {!data.line_items
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
                        disabled={data && data.line_items && data.line_items.length >= 1 ? false : true}
                    >
                        Checkout
                    </StyledButton>
                </ButtontWrapper>
            </ContainerWrapper>
        </Drawer>

    )
}

export default CartDrawer