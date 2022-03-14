import styled from 'styled-components'

export const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 9;
`

export const Text = styled.span`
    color: gray;
`

export const CartIcon = styled.button`
    position: absolute;
    color: gray;
    right: 5%;
    top: 15px;
    cursor: pointer;
    border: none;
    background-color: white;

    display: flex;
    align-items: center;
`