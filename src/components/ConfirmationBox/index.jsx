import React from 'react'
import Router from 'next/router';

import { Result, Button, Alert } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons'

import { Container, ConfirmationBoxWrapper } from './styles'
import NoContent from '../NoContent';

const ConfirmarionBox = ({ order }) => {

    // console.log(order);

    return (
        <Container>
            <ConfirmationBoxWrapper>
                {!order
                    ? <NoContent />
                    : (
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
                                    key="backtohome"
                                    icon={<LeftCircleOutlined />}
                                    onClick={() => Router.replace('/')}
                                >
                                    Go back to home
                                </Button>
                            ]}
                        />
                    )
                }
            </ConfirmationBoxWrapper>
        </Container>
    )
}

export default ConfirmarionBox