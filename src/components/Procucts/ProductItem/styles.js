import styled from 'styled-components'

export const CardWrapper = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-between; */
    /* align-items: center; */
    /* width: 100%; */
`

export const ImageBox = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
`

export const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    width: 100%;  
`
export const Title = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColors.secondary};

    &:nth-child(2) {
        color: ${({ theme }) => theme.textColors.warnning};
    }
`
