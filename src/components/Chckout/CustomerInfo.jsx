import React from 'react'

import { Form, Input } from 'antd'
import { FormWrapper } from './styles'

const CustomerInfo = ({ setShippingData, shippingData }) => {

    const handleChange = (e) => {
        setShippingData((prev) => setShippingData({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <FormWrapper>
            <Form
                size='middle'
                layout='vertical'
            >
                <Form.Item
                    label="Username"
                    required
                >
                    <Input
                        name='name'
                        value={shippingData.name}
                        placeholder='alohadancemeow'
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                    required
                >
                    <Input
                        name='email'
                        value={shippingData.email}
                        placeholder='alohadancemeow@gmail.com'
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    required
                >
                    <Input
                        name='phone'
                        value={shippingData.phone}
                        placeholder='0123456789'
                        onChange={handleChange}
                    />
                </Form.Item>
            </Form>
        </FormWrapper>
    )
}

export default CustomerInfo