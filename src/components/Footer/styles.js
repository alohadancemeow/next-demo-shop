import styled from "styled-components";

export const FooterSection = styled.footer`
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    text-align: center;
`

export const FooterTitle = styled.h2`
    font-size: 14px;
    /* font-weight: 500; */
    padding: 5px 0;
    margin-bottom: -8px;
    color: gray;
    text-transform: uppercase;
`
export const FooterSubtitle = styled.h4`
    font-size: 14px;
    color: gray;
    font-weight: normal;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
       display: flex;
       flex-direction: column;
    }
`

export const FooterLink = styled.a`
    letter-spacing: 2px;
    margin-top: -5px;
`