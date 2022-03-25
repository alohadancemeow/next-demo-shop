import React, { useState } from 'react'

import { Steps, message, Form, Input, Button } from 'antd'
import { TagsOutlined, WalletOutlined, CreditCardOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'

import CustomerInfo from './CustomerInfo'
import ShippingDetails from './ShippingDetails'
import PaymentForm from './PaymentForm'

import {
    Container,
    BoxWrapper,
    Header,
    ContentWrapper,
    ContentBox,
    SummaryBox,
    SummaryContent,
    SummaryTitle,
    SummaryItemList,
    Subtitle,
    Subtotal,
    ButtonWrapper
} from './styles'

const { Step } = Steps

const CheckoutPage = ({ data, checkoutToken }) => {

    console.log(data);
    console.log(checkoutToken);
    // if (!checkoutToken) return 'No order!'

    // const { live: { line_items, subtotal } } = checkoutToken

    // states
    const [current, setCurrent] = useState(0)
    const [userInfo, setUserInfo] = useState({
        name: '' | 'alo',
        email: '',
        phone: ''
    })

    console.log(userInfo);


    // next-back step
    const next = () => setCurrent(current + 1)
    const back = () => setCurrent(current - 1)


    // handlers
    const handleNext = () => {
        if (current < steps.length - 1) next()
        if (current === steps.length - 1) {
            setCurrent(0)
            // message.success('Processing complete!')
        }
    }

    const handleBack = () => current > 0 ? back() : null



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


    // TODO: checkout steps
    // 1. customer infomation
    // 2. shipping details
    // 3. confirm payment
    const steps = [
        {
            title: 'Customer',
            content: <CustomerInfo setUserInfo={setUserInfo} />,
        },
        {
            title: 'Shipping Details',
            content: <ShippingDetails />,
        },
        {
            title: 'Payment',
            content: <PaymentForm />,
        },
    ];

    return (
        <Container>
            <BoxWrapper>
                <Header>Checkout</Header>


                <ContentWrapper>
                    <ContentBox>
                        <Steps size='small' current={current} progressDot>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} icon={item.icon} />
                            ))}
                        </Steps>
                        {steps[current].content}

                        <ButtonWrapper>
                            {current < steps.length - 1 && (
                                <Button
                                    type="primary"
                                    onClick={() => next()}
                                // disabled={}
                                >
                                    Next
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                    Done
                                </Button>
                            )}
                            {current > 0 && (
                                <Button style={{ margin: '0 8px' }} onClick={() => back()}>
                                    back
                                </Button>
                            )}
                        </ButtonWrapper>

                    </ContentBox>

                    <SummaryBox>

                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryContent>
                            {data && data.line_items.map(item => (
                                <SummaryItemList>
                                    <Subtitle>x{item.quantity}</Subtitle>
                                    <Subtitle>{item.name}</Subtitle>
                                    <Subtitle>{item.line_total.formatted_with_symbol}</Subtitle>
                                </SummaryItemList>
                            ))}
                            <Subtotal>
                                <span>Subtotal</span>
                                <span>{data && data.subtotal.formatted_with_code}</span>
                            </Subtotal>
                        </SummaryContent>

                    </SummaryBox>
                </ContentWrapper>
            </BoxWrapper>
        </Container>
    )
}

export default CheckoutPage