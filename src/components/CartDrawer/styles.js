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