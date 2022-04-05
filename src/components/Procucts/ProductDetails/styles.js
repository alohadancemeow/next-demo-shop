import styled from 'styled-components'
import { Image as AntImage } from 'antd'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    padding-top: 2rem;
    margin: 0 auto;
    /* position: relative; */

    /* @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: 0 20px;
    } */
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-top: 1rem;
    }
`

export const CardWrapper = styled.div`
    .ant-card {
        width: 1000px;
        cursor: default;

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.notebook}) {
            width: 800px;
        }
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            width: 600px;
        }

        @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            width: 300px;
        }
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`

export const StyledImage = styled(AntImage)`
    width: 500px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.notebook}) {
        width: 400px;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 350px;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 250px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    width: 40%;
    /* align-items: center; */
    padding: 5rem 3rem;
    margin-left: 10px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: fit-content;
        padding: 10px 3rem;
        margin: 10px auto;
        text-align: center;
    }
`

export const Header = styled.p`
    text-transform: uppercase;
    font-size: 14px;
    color: gray;
    font-weight: normal;
    letter-spacing: 2px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 12px;
        letter-spacing: 1.2px;
    }
`

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 500;
    padding: 5px 0;
    margin-bottom: -8px;
    color: gray;
    text-transform: uppercase;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 16px;
    }
`
export const Subtitle = styled.h4`
    font-size: 14px;
    color: gray;
    font-weight: normal;
    /* letter-spacing: 2px; */

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 12px;
    }
`

