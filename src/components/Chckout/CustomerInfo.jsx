import React, { useState } from 'react'

import { Form, Input } from 'antd'
import { FormWrapper } from './styles'

const CustomerInfo = ({ setUserInfo }) => {


    const handleChange = (e) => {
        setUserInfo((prev) => setUserInfo({
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
                        placeholder='0123456789'
                        onChange={handleChange}
                    />
                </Form.Item>
            </Form>
        </FormWrapper>
    )
}

export default CustomerInfo