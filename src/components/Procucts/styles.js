import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px 10px;
    
    justify-content: center;
    max-width: 980px;
    padding: 0px;
    margin: 0 auto 3rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.notebook}) {
        max-width: 800px;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 600px;
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 30px;
        grid-template-columns: 1fr;
    }
`