import React from 'react'

import { Drawer, Steps, Table } from 'antd'
import { CloseCircleOutlined, TagsOutlined, WalletOutlined, CreditCardOutlined, RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'
import { ContainerWrapper, ContentWrapper, ButtontWrapper, Content } from './styles'
import { Button } from '../Styled-elememts'

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
                    <Button onClick={() => setOpen(false)}>
                        <CloseCircleOutlined style={{ fontSize: '18px' }} />
                        <span>Back</span>
                    </Button>
                    <Button type='accent'>
                        <RightCircleOutlined style={{ fontSize: '18px' }} />
                        <span>Next</span>
                    </Button>
                </ButtontWrapper>
            </ContainerWrapper>
        </Drawer>

    )
}

export default CartDrawer