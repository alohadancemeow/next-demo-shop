import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px 5px;
    max-width: 900px;
    /* background-color: gray; */
    padding: 0px;
    margin: 0 auto;

`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    /* background-color: blue; */
    /* width: '100%'; */
`