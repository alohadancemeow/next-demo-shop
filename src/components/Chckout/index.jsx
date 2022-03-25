import React, { useState } from 'react'

import { Steps, message, Form, Input } from 'antd'
import { TagsOutlined, WalletOutlined, CreditCardOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'

const { Step } = Steps

const CheckoutPage = ({ data, checkoutToken }) => {

    // states
    const [current, setCurrent] = useState(0)

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



    // TODO: checkout 
    // 1. customer infomation
    const CustomerInfomation = () => (
        <div>customer infomation</div>
    )
    // 2. shipping address
    const ShippingAddress = () => (
        <div>shipping address</div>
    )
    // 3. confirm payment
    const Payment = () => (
        <div>confirm payment</div>
    )


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
            content: <CustomerInfomation />,
            icon: <TagsOutlined />
        },
        {
            title: 'Bill Address',
            content: <ShippingAddress />,
            icon: <WalletOutlined />
        },
        {
            title: 'Payment',
            content: <Payment />,
            icon: <CreditCardOutlined />
        },
    ];

    return (
        <div>
            <Steps size='small' current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} icon={item.icon} />
                ))}
            </Steps>
            <div>
                {steps[current].content}
            </div>
        </div>
    )
}

export default CheckoutPage