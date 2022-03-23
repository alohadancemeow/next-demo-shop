import React from 'react'
import Link from 'next/link'
import { Descriptions } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons'

import { Container, ConfirmationBoxWrapper, ButtonWrapper } from './styles'
import { StyledButton } from '../Styled-elememts';

const ConfirmarionBox = () => {
    return (
        <Container>
            <ConfirmationBoxWrapper>
                <Descriptions
                    layout='vertical'
                    // size='middle'
                    title="Confirmation"
                    bordered
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                    <Descriptions.Item label="Username">Alohadancemeow</Descriptions.Item>
                    <Descriptions.Item label="Email">alohadance@gmail.com</Descriptions.Item>
                    <Descriptions.Item label="Phone">0123456789</Descriptions.Item>
                    <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                    <Descriptions.Item label="Time">18:00:00</Descriptions.Item>
                    <Descriptions.Item label="Products">
                        Item -01 book
                        <br />
                        Item -02 book
                        <br />
                        Item -03 book
                        <br />
                        Item -04 book
                        <br />
                        Item -05 book
                        <br />
                        Item -06 book
                    </Descriptions.Item>
                </Descriptions>
                <ButtonWrapper >
                    <Link href='/'>
                        <a>
                            <StyledButton
                                size='large'
                                variant="primary"
                                icon={<LeftCircleOutlined />}
                            >
                                Back to home
                            </StyledButton>
                        </a>
                    </Link>
                </ButtonWrapper>
            </ConfirmationBoxWrapper>
        </Container>
    )
}

export default ConfirmarionBox