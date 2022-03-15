import React, { useState, useEffect } from 'react'

import { Drawer, Steps, Table, message } from 'antd'
import { CloseCircleOutlined, TagsOutlined, WalletOutlined, CreditCardOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'

import { ContainerWrapper, ContentWrapper, ButtontWrapper, Content, styledDrawer } from './styles'
import { StyledButton } from '../Styled-elememts'

import { fakeData as item } from '../../pages'

// create steps
const steps = [
    {
        title: 'Items',
        content: 'Content A',
        icon: <TagsOutlined />
    },
    {
        title: 'Bill Address',
        content: 'Content B',
        icon: <WalletOutlined />
    },
    {
        title: 'Payment',
        content: 'Last-content',
        icon: <CreditCardOutlined />
    },
];

const CartDrawer = ({ open, setOpen, current, setCurrent, next, back }) => {

    const [width, setWidth] = useState(0)

    const { Step } = Steps;

    const isMobile = width <= 578 ? true : false
    // console.log(isMobile);

    // handlers
    const handleNext = () => {
        if (current < steps.length - 1) next()
        if (current === steps.length - 1) {
            message.success('Processing complete!')
            setCurrent(0)
            setOpen(false)
        }
    }

    const handleBack = () => {
        current > 0 ? back() : setOpen(false)
    }

    // or use @react-hook/window-size
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [setWidth])

    return (
        <Drawer
            title="Your Cart"
            placement="right"
            onClose={() => setOpen(false)}
            visible={open}
            width={isMobile ? '100%' : 500}

            closeIcon={<CloseCircleOutlined />}
        >
            <ContainerWrapper >
                <ContentWrapper>
                    <Steps size='small' current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} icon={item.icon} />
                        ))}
                    </Steps>

                    <Content>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Content>
                </ContentWrapper>

                <ButtontWrapper>
                    <StyledButton
                        size='large'
                        icon={
                            current > 0
                                ? <LeftCircleOutlined />
                                : <CloseCircleOutlined />
                        }
                        onClick={handleBack}
                    >
                        {current > 0 ? 'Back' : 'Close'}
                    </StyledButton>
                    <StyledButton
                        size='large'
                        variant='accent'
                        icon={<RightCircleOutlined />}
                        onClick={handleNext}
                    >
                        Next
                    </StyledButton>
                </ButtontWrapper>
            </ContainerWrapper>
        </Drawer>

    )
}

export default CartDrawer