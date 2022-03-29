import React from 'react'
import Router from 'next/router';

import { Result, Button, Alert, Typography } from 'antd';
import { LeftCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

import { Container, ConfirmationBoxWrapper } from './styles'

const ConfirmarionBox = ({ order }) => {

    const { Paragraph, Text } = Typography;

    const OrderContent = () => (
        <Result
            status="success"
            title="Successfully Purchased!"
            subTitle={
                <>
                    <span>Customer Ref: {order && order.customer_reference}</span> <br />
                    <span>Order number: {order && order.id}</span> <br />
                    <Alert
                        // message="Cloud server configuration takes 1-5 minutes, Please check your email."
                        description='Cloud server configuration takes 1-5 minutes, Please check your email.'
                        type="success"
                        showIcon
                        style={{ margin: '15px 0' }}
                    />
                </>
            }
            extra={[
                <Button
                    type="primary"
                    // key="console"
                    icon={<LeftCircleOutlined />}
                    onClick={() => Router.push('/')}
                >
                    Go back to home
                </Button>
            ]}
        />
    )

    const NoOrderContent = () => (
        <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check and modify the following information before resubmitting."
            extra={[
                <Button
                    type="primary"
                    // key="console"
                    icon={<LeftCircleOutlined />}
                    onClick={() => Router.push('/')}
                >
                    Go back to home
                </Button>
            ]}
        >
            <div className="desc">
                <Paragraph>
                    <Text strong style={{ fontSize: 16 }} >
                        The content you submitted has the following error:
                    </Text>
                </Paragraph>
                <Paragraph>
                    <CloseCircleOutlined style={{ color: 'red' }} />{' '}
                    You have to &gt; <a>Add to Cart</a> &gt; <a>Checkout</a>
                </Paragraph>
                <Paragraph>
                    <CloseCircleOutlined style={{ color: 'red' }} />{' '}
                    Complete the form &gt; <a>Customer Infomamtion</a>  &gt; <a>Shipping Address</a>
                </Paragraph>
                <Paragraph>
                    <CloseCircleOutlined style={{ color: 'red' }} />{' '}
                    Confirm Payment &gt; <a>Payment</a>
                </Paragraph>
            </div>
        </Result>
    )


    return (
        <Container>
            <ConfirmationBoxWrapper>
                {order
                    ? <OrderContent />
                    : <NoOrderContent />
                }
            </ConfirmationBoxWrapper>
        </Container>
    )
}

export default ConfirmarionBox