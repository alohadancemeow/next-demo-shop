import styled from 'styled-components'
// import Image from 'next/image'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 3rem 0 10px 0;
   /* justify-content: space-between; */

   position: relative;
`
export const Logo = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
`
export const Title = styled.h2`
    font-size: 24px;
    font-weight: 500;
    padding: 5px 0;
    margin-bottom: -10px;
    color: gray;
    text-transform: uppercase;
`
export const Subtitle = styled.h4`
    font-size: 14px;
    color: gray;
    font-weight: normal;
    letter-spacing: 2px;
`