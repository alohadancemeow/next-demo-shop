import styled from 'styled-components'

export const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 9;
`
export const CartIcon = styled.button`
    position: absolute;
    /* color: gray; */
    color: ${({ noItem, theme }) => noItem ? 'gray' : theme.colors.primary};
    right: 5%;
    top: 15px;
    cursor: pointer;
    border: none;
    background-color: white;

    display: flex;
    align-items: center;

    .cart-icon {
        font-size: 50px;

        @media screen and ( max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            font-size: 35px;
        }
        @media screen and ( max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            font-size: 25px;
        }
    }
`
export const Text = styled.span`
    color: gray;
    padding-left: 4px;
`