import React, { useState, useEffect } from 'react'

import { Drawer, Steps, Table } from 'antd'
import { CloseCircleOutlined, TagsOutlined, WalletOutlined, CreditCardOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'

import { StyledDrawer, ContainerWrapper, ContentWrapper, ButtontWrapper, Content, styledDrawer } from './styles'
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

const CartDrawer = ({ open, setOpen }) => {

    const [width, setWidth] = useState(0)

    const { Step } = Steps;

    const isMobile = width <= 578 ? true : false
    // console.log(isMobile);

    // or use @react-hook/window-size
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [setWidth])

    return (
        <StyledDrawer
            title="Your Cart"
            placement="right"
            onClose={() => setOpen(false)}
            visible={open}
            width={isMobile ? '100%' : 500}

            closeIcon={<CloseCircleOutlined />}
        >
            <ContainerWrapper >

                <ContentWrapper>
                    <Steps size='small' current={2}>
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
                        icon={<CloseCircleOutlined />}
                        onClick={() => setOpen(false)}
                    >
                        Back
                    </StyledButton>
                    <StyledButton
                        size='large'
                        variant='accent'
                        icon={<RightCircleOutlined />}
                    >
                        Next
                    </StyledButton>
                </ButtontWrapper>
            </ContainerWrapper>
        </StyledDrawer>

    )
}

export default CartDrawer