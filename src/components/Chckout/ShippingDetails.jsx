import React from 'react'

import { FormWrapper } from './styles'
import { Form, Input, Select } from 'antd';

const ShippingDetails = () => {


  return (
    <FormWrapper>
      <Form
        labelCol={{
          span: 8,
        }}
        // wrapperCol={{
        //   span: 16,
        // }}
        layout="horizontal"
      >
        <Form.Item label="Address" required>
          <Input
            placeholder='12/34 Sweet home'
          />
        </Form.Item>
        <Form.Item label="City" required>
          <Input
            placeholder='Bangkok'
          />
        </Form.Item>
        <Form.Item label="Postal/Zip code" required>
          <Input
            placeholder='12345'
          />
        </Form.Item>
        <Form.Item label="Country" required>
          <Select>
            <Select.Option value="demo">
              Demo
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="State/Province" required>
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Shipping Option" required>
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </FormWrapper>
  )
}

export default ShippingDetails