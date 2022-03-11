import styled from 'styled-components'

export const ImageBox = styled.div`
    width: '100%';
    /* position: relative; */
`
export const TextBox = styled.div`
    /* width: '100%'; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`
export const Title = styled.p`
    font-size: 14px;
    color: gray;

    &:nth-child(2) {
        margin-left: 5px;
        margin-right: 10px;
        color: orange;
    }

    &:nth-child(3) {
        color: green;
        margin-left: 20px;

        ::before{
            content: "฿";
        }
    }
`