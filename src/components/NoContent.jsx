import React from 'react'
import Router from 'next/router'

import { Result, Button, Typography } from 'antd';
import { LeftCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

const NoContent = () => {

    const { Paragraph, Text } = Typography;

    return (
        <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check and modify the following information before resubmitting."
            extra={[
                <Button
                    type="primary"
                    key="backtohome"
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
}

export default NoContent