import React from 'react'

import Router from 'next/router'
import { Alert, Button } from 'antd'
import { LeftCircleOutlined } from '@ant-design/icons'
import { Container, BoxWrapper, Header } from './styles'

const NoOrder = () => {
    return (
        <Container>
            <BoxWrapper>
                <Header>Checkout</Header>
                <Alert
                    message="No order!"
                    showIcon
                    description="Error Description Error Description Error Description Error Description"
                    type="warning"
                    action={
                        <Button
                            size="small"
                            type='link'
                            icon={<LeftCircleOutlined />}
                            // danger
                            onClick={() => Router.push('/')}
                        >
                            Back to Home
                        </Button>
                    }
                />
            </BoxWrapper>
        </Container>
    )
}

export default NoOrder