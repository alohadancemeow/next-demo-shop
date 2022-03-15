import React from 'react'

import { Drawer, Steps, Table } from 'antd'
import { CloseCircleOutlined, TagsOutlined, WalletOutlined, CreditCardOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'
import { ContainerWrapper, ContentWrapper, ButtontWrapper, Content } from './styles'
import { StyledButton } from '../Styled-elememts'

// create steps
// const steps = [
//     {
//         title: 'Items',
//         content: 'Content A',
//         icon: <TagsOutlined />
//     },
//     {
//         title: 'Bill Address',
//         content: 'Content B',
//         icon: <WalletOutlined />
//     },
//     {
//         title: 'Payment',
//         content: 'Last-content',
//         icon: <CreditCardOutlined />
//     },
// ];

const CartDrawer = ({ open, setOpen }) => {

    const { Step } = Steps;

    return (
        <Drawer
            title="Your Cart"
            placement="right"
            onClose={() => setOpen(false)}
            visible={open}
            // width={500}
            closeIcon={<CloseCircleOutlined />}
        >
            <ContainerWrapper >

                <ContentWrapper>
                    <Steps size="small" current={1}>
                        <Step title="Finished" />
                        <Step title="In Progress" />
                        <Step title="Waiting" />
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
        </Drawer>

    )
}

export default CartDrawer