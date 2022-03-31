import styled from 'styled-components'

export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* margin: 1rem .5rem; */
   
    width: 100%;
    height: 100%;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    margin: 20px 0;
`

export const ButtontWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr ;
`

export const TableWrapper = styled.div`
    width: 100%;
    /* margin: 0 10px; */
    /* overflow: hidden; */
`

export const TableFooter = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
    margin: 15px 30px 10px 0;
`

export const FormWrapper = styled.div`
    width: 80%;
    margin:0 auto;
    padding-top: 20px;
`

export const EditPriceBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
       a {
            margin: 0 -10px;
            padding: 0 5px;
       }
    }
`