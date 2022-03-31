import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'

import { Form, Input, Alert } from 'antd'
import { FormWrapper, FormItemWrapper } from './styles'

const PaymentForm = ({ shippingData, setShippingData }) => {

  const windowWidth = useWindowWidth()
  console.log(windowWidth);

  const handleChange = (e) => {
    setShippingData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }


  return (
    <FormWrapper>
      <Alert
        message="Test code"
        description={
          <>
            Visa: 4242 4242 4242 4242 <br />
            Mastercard: 5555 5555 5555 4444
          </>
        }
        type="info"
        showIcon={windowWidth >= 576}
        style={{ margin: '10px 0' }}
      />
      <Form
        size='middle'
        layout='vertical'
      >
        <Form.Item
          label="Card Number"
          required
        >
          <Input
            name='cardNumber'
            value={shippingData.cardNumber || ''}
            placeholder='4242 4242 4242 4242'
            onChange={handleChange}
          />

        </Form.Item>

        <Form.Item>
          <FormItemWrapper>
            <Form.Item
              label="Exp month"
              required
            >
              <Input
                name='expMonth'
                value={shippingData.expMonth || ''}
                placeholder='10'
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Exp Year"
              required
            >
              <Input
                name='expYear'
                value={shippingData.expYear || ''}
                placeholder='25'
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="CVV"
              required
            >
              <Input
                name='cvv'
                value={shippingData.cvv || ''}
                placeholder='123'
                onChange={handleChange}
              />
            </Form.Item>
          </FormItemWrapper>
        </Form.Item>

      </Form>
    </FormWrapper>
  )
}

export default PaymentForm