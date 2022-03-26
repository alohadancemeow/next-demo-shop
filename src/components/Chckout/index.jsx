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

const CheckoutPage = ({ data, checkoutToken }) => {

    if (!checkoutToken) return <NoOrder />
    // console.log(data);
    // console.log(checkoutToken);

    const commerce = getCommerce()

    // const { live: { line_items, subtotal } } = checkoutToken

    // states of customer
    const [current, setCurrent] = useState(0)
    const [shippingData, setShippingData] = useState({})

    // # States of shipping address
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')



    // next-back step
    const next = () => setCurrent(current + 1)
    const back = () => setCurrent(current - 1)

    // handlers
    const handleNext = () => {
        if (current < steps.length - 1) {
            if (current === 0) {
                if (shippingData.name === '' || shippingData.email === '' || shippingData.phone === '') {
                    return message.error('Please complete all fields.')
                }
            }
            next()
        }
        if (current === steps.length - 1) {
            message.success('Processing complete!')
            // setCurrent(0)
            // setShippingData({
            //     name: '',
            //     email: '',
            //     phone: ''
            // })
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
            content: <CustomerInfo setShippingData={setShippingData} shippingData={shippingData} />,
        },
        {
            title: 'Shipping Details',
            content: <ShippingDetails />,
        },
        {
            title: 'Payment',
            content: <PaymentForm />,
        },
    ];

    // # Fetch
    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
        // console.log('countries', countries);

        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }

    const fetchSubdidvision = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
        // console.log('subdivisions', subdivisions);

        setShippingSubdivisions(subdivisions)
        setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })
        // console.log('options', options);

        setShippingOptions(options)
        setShippingOption(options[0].id)
    }

    // get key,name from countries  --> 'TH' : 'Thailand'
    const countries = Object.entries(shippingCountries)
        .map(([code, name]) => ({ id: code, label: name }))
    // console.log(countries);

    const subdivisions = Object.entries(shippingSubdivisions)
        .map(([code, name]) => ({ id: code, label: name }))
    // console.log(subdivisions);

    const options = shippingOptions.map(so => ({
        id: so.id,
        label: `${so.description} - (${so.price.formatted_with_symbol})`
    }))
    // console.log(options)


    // # Effect
    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    useEffect(() => {
        if (shippingCountry) fetchSubdidvision(shippingCountry)
    }, [shippingCountry])

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }, [shippingSubdivision])

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
                            {data && data.line_items.map(item => (
                                <SummaryItemList>
                                    <Subtitle>x{item.quantity}</Subtitle>
                                    <Subtitle>{item.name}</Subtitle>
                                    <Subtitle>{item.line_total.formatted_with_symbol}</Subtitle>
                                </SummaryItemList>
                            ))}
                            <Subtotal>
                                <span>Subtotal</span>
                                <span>{data && data.subtotal.formatted_with_code}</span>
                            </Subtotal>
                        </SummaryContent>

                    </SummaryBox>
                </ContentWrapper>
            </BoxWrapper>
        </Container>
    )
}

export default CheckoutPage