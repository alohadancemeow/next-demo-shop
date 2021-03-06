import React, { useState, useContext } from 'react'
import Router from 'next/router'

import getCommerce from '../../lib/commerce'
import { useCartDispatch } from '../../context/Store'
import { GlobalContext } from '../../context/GlobalContext'

import { Steps, message, Button, PageHeader } from 'antd'
import { CheckCircleOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'

import CustomerInfo from './CustomerInfo'
import ShippingDetails from './ShippingDetails'
import PaymentForm from './PaymentForm'
import NoContent from '../NoContent'

import {
    Container,
    BoxWrapper,
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

const commerce = getCommerce()

const CheckoutPage = () => {

    // states
    const [current, setCurrent] = useState(0)
    const [loading, setLoading] = useState(false)
    const [shippingData, setShippingData] = useState({})

    // call context
    const { setCart, setOrder } = useCartDispatch()
    const { checkoutToken } = useContext(GlobalContext)


    // next-back step
    const next = () => setCurrent(current + 1)
    const back = () => setCurrent(current - 1)

    // handlers
    const handleNext = async () => {
        if (current < steps.length - 1) {

            if (current === 0) {
                if (!shippingData.name || !shippingData.email || !shippingData.phone) {
                    return message.error('Please complete all fields.')
                }
            }
            if (current === 1) {
                if (!shippingData.address || !shippingData.city || !shippingData.zip) {
                    return message.error('Please complete all fields.')
                }
            }

            next()
        }

        if (current === steps.length - 1) {

            if (!shippingData.cardNumber || !shippingData.expMonth || !shippingData.expYear || !shippingData.cvv) {
                return message.error('Please complete all fields.')
            }

            await handleCaptureCheckout()
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
            content: <PaymentForm
                shippingData={shippingData}
                setShippingData={setShippingData}
            />,
        },
    ];


    // Refresh the cart and update the cart state
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh()
        setCart(newCart)
    }

    // TODO: Capture the checkout
    // - create orderData
    // - capture order
    // - set order to localStorage
    // - set order to context
    // - set refresh cart
    // - redirect to confirmation page
    const handleCaptureCheckout = async () => {
        setLoading(true)

        // create orderData for capture
        const orderData = {
            line_items: checkoutToken.live.line_items,
            customer: {
                firstname: shippingData.name,
                // lastname: shippingData.lastname,
                email: shippingData.email,
                phone: shippingData.phone
            },
            shipping: {
                name: shippingData.name,
                street: shippingData.address,
                town_city: shippingData.city,
                county_state: shippingData.shippingSubdivision,
                postal_zip_code: shippingData.zip,
                country: shippingData.shippingCountry
            },
            fulfillment: {
                shipping_method: shippingData.shippingOption
            },
            payment: {
                gateway: 'test_gateway',
                card: {
                    number: shippingData.cardNumber,
                    expiry_month: shippingData.expMonth,
                    expiry_year: shippingData.expYear,
                    cvc: shippingData.cvv,
                    postal_zip_code: shippingData.zip,
                },
            }
        }

        try {
            const order = await commerce.checkout.capture(checkoutToken.id, orderData)
            // localStorage.setItem('order_receipt', JSON.stringify(order))
            setOrder(order)
            await refreshCart()

            setCurrent(0)
            setShippingData({})
            message.success('Processing complete!')

            Router.replace('/confirmation')
        } catch (error) {
            console.log(error);
            message.error(`${error.data.status_code} ${error.data.error.message}`)
        }

        setLoading(false)
    }

    if (!checkoutToken) return (
        <Container>
            <BoxWrapper>
                <NoContent />
            </BoxWrapper>
        </Container>
    )

    return (
        <Container>
            <BoxWrapper>
                <PageHeader
                    onBack={() => Router.push('/')}
                    title="Checkout"
                >
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
                                        loading={loading}
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
                                {checkoutToken && checkoutToken.live.line_items.map(item => (
                                    <SummaryItemList key={item.id}>
                                        <Subtitle>x{item.quantity}</Subtitle>
                                        <Subtitle>{item.name}</Subtitle>
                                        <Subtitle>{item.line_total.formatted_with_symbol}</Subtitle>
                                    </SummaryItemList>
                                ))}
                                <Subtotal>
                                    <span>Subtotal</span>
                                    <span>{checkoutToken && checkoutToken.live.subtotal.formatted_with_code}</span>
                                </Subtotal>
                            </SummaryContent>
                        </SummaryBox>

                    </ContentWrapper>

                </PageHeader>
            </BoxWrapper>
        </Container>
    )
}

export default CheckoutPage