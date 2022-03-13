import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 980px;
    padding: 0px;
    margin: 0 auto;
    /* position: relative; */

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: 0 20px;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 30px;
    }
`