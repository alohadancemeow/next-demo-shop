import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 3rem;
`
export const BoxWrapper = styled.div`
    /* display: flex; */
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
`

export const Header = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin: 15px auto;
`

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "content content summary";
    gap: 5px 15px;
    /* margin: 10px; */
`

export const ContentBox = styled.div`
    grid-area: content;
    padding: 15px 15px 0 0;

`

export const SummaryBox = styled.div`
   grid-area: summary;
   margin-left: 10px;
`

export const SummaryTitle = styled.h2`

`

export const SummaryContent = styled.div`

`

export const SummaryItemList = styled.li`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: "qty name name price"; 
`

export const Subtitle = styled.span`
    &:nth-child(1) {
       grid-area: qty;
    }
    &:nth-child(2) {
       grid-area: name;
    }
    &:nth-child(3) {
       grid-area: price;
    }
`

export const Subtotal = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: gray;
    font-weight: 500;
    margin-top: 10px;
`

export const ButtonWrapper = styled.div`
     /* margin-top: 24px;
     margin-left: 10px; */

    width: 80%;
    margin: 0 auto;
`


// # Customer styles
export const FormWrapper = styled.div`
    width: 80%;
    margin:0 auto;
    padding-top: 20px;
`

