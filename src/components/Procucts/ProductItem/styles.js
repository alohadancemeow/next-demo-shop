import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 20px;
    width: calc(100% / 3);
    
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        width: calc(100% / 2);
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        width: calc(100% / 1);
    }
`

export const ImageBox = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
`

export const TextBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 0;
    width: 100%;  
`
export const Title = styled.p`
    font-size: 14px;
    color: gray;
    font-weight: 500;

    &:nth-child(2) {
        color: orange;
    }

    &:nth-child(3) {
        color: #52c41a;

        ::before{
            content: "฿";
        }
    }
`

export const EnterBox = styled.div`
    display: ${({ enter }) => enter ? 'block' : 'none'};
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #d4d4d4;
    opacity: 0.9;
    z-index: 2;
    
`
export const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`