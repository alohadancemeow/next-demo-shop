import React, { useState, useEffect } from 'react'
import getCommerce from '../../lib/commerce'

import { Steps, message, Button } from 'antd'
import { CheckCircleOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'

import CustomerInfo from './CustomerInfo'
import ShippingDetails from './ShippingDetails'
import PaymentForm from './PaymentForm'
import NoOrder from './NoOrder'

import {
    Container,
    BoxWrapper,
    Header,
    ContentWrapper,
    ContentBox,
    SummaryBox,
    SummaryContent,
    SummaryTitle,
    SummaryItemList,
    Subtitle,
    Subtotal,
    ButtonWrapper
} from './styles'


const { Step } = Steps


const CheckoutPage = ({ checkoutToken }) => {

    if (!checkoutToken) return <NoOrder />
    
    // states
    const [current, setCurrent] = useState(0)
    const [shippingData, setShippingData] = useState({})
    // console.log(shippingData);

    const { live: { line_items, subtotal } } = checkoutToken


    // next-back step
    const next = () => setCurrent(current + 1)
    const back = () => setCurrent(current - 1)

    // handlers
    const handleNext = () => {
        if (current < steps.length - 1) {

            if (current === 0) {
                if (!shippingData.name || !shippingData.email || !shippingData.phone) {
                    return message.error('Please complete all fields.')
                }
            }
            if (current === 1) {
                if (!shippingData.address || !shippingData.city || !shippingData.postal) {
                    return message.error('Please complete all fields.')
                }
            }

            next()
        }

        if (current === steps.length - 1) {
            setCurrent(0)
            setShippingData({})
            message.success('Processing complete!')
        }
    }

    const handleBack = () => current > 0 ? back() : null


    // TODO: checkout steps
    // 1. customer infomation
    // 2. shipping details
    // 3. confirm payment
    const steps = [
        {
            title: 'Customer',
            content: <CustomerInfo
                setShippingData={setShippingData}
                shippingData={shippingData}
            />,
        },
        {
            title: 'Shipping Details',
            content: <ShippingDetails
                checkoutToken={checkoutToken}
                shippingData={shippingData}
                setShippingData={setShippingData}
            />,
        },
        {
            title: 'Payment',
            content: <PaymentForm />,
        },
    ];


    return (
        <Container>
            <BoxWrapper>
                <Header>Checkout</Header>
                <ContentWrapper>
                    <ContentBox>
                        <Steps size='small' current={current} progressDot>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} icon={item.icon} />
                            ))}
                        </Steps>
                        {steps[current].content}

                        <ButtonWrapper>
                            {current < steps.length - 1 && (
                                <Button
                                    icon={<RightCircleOutlined />}
                                    type="primary"
                                    onClick={handleNext}
                                // disabled={}
                                >
                                    Next
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button
                                    icon={<CheckCircleOutlined />}
                                    type="primary"
                                    onClick={handleNext}
                                >
                                    Done
                                </Button>
                            )}
                            {current > 0 && (
                                <Button
                                    icon={<LeftCircleOutlined />}
                                    style={{ margin: '0 8px' }}
                                    onClick={handleBack}
                                >
                                    back
                                </Button>
                            )}
                        </ButtonWrapper>

                    </ContentBox>

                    <SummaryBox>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryContent>
                            {line_items.map(item => (
                                <SummaryItemList>
                                    <Subtitle>x{item.quantity}</Subtitle>
                                    <Subtitle>{item.name}</Subtitle>
                                    <Subtitle>{item.line_total.formatted_with_symbol}</Subtitle>
                                </SummaryItemList>
                            ))}
                            <Subtotal>
                                <span>Subtotal</span>
                                <span>{subtotal.formatted_with_code}</span>
                            </Subtotal>
                        </SummaryContent>
                    </SummaryBox>
                    
                </ContentWrapper>
            </BoxWrapper>
        </Container>
    )
}

export default CheckoutPage