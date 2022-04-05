import React, { useState, useEffect, useContext } from 'react'

import Router from 'next/router'

import { Drawer } from 'antd'
import { CloseCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

import { ContainerWrapper, ContentWrapper, ButtontWrapper, Content } from './styles'
import { Spinner, StyledButton } from '../Styled-elememts'
import CartTable from './CartTable'

import { useCartState } from '../../context/Store'
import { GlobalContext } from '../../context/GlobalContext'


const CartDrawer = () => {

    // states
    const [width, setWidth] = useState(0)

    // global context
    const { open, setOpen } = useContext(GlobalContext)

    // use context
    const { cart } = useCartState()
    const { data } = cart

    // check for innerWidth
    const isMobile = width <= 578 ? true : false

    // or use @react-hook/window-size
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [setWidth])

    if (cart.loading) return <Spinner>Loading...</Spinner>


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
                    <Content>
                        {!data.line_items
                            ? <p>No item</p>
                            : <>
                                <CartTable isMobile={isMobile} />
                            </>
                        }
                    </Content>
                </ContentWrapper>

                <ButtontWrapper>
                    <StyledButton
                        size='large'
                        icon={<CloseCircleOutlined />}
                        onClick={() => setOpen(false)}
                    >
                        Close
                    </StyledButton>
                    <StyledButton
                        htmlType='submit'
                        form='form'
                        size='large'
                        variant='accent'
                        icon={<RightCircleOutlined />}
                        onClick={() => Router.push('/checkout')}
                        disabled={data && data.line_items && data.line_items.length >= 1 ? false : true}
                    >
                        Checkout
                    </StyledButton>
                </ButtontWrapper>
            </ContainerWrapper>
        </Drawer>

    )
}

export default CartDrawer