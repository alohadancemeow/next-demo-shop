import styled from 'styled-components'

export const Button = styled.button`
    width: 80%;
    height: 50px;
    border-radius: 3px;
    border: ${({ type }) => type === 'primary' ? 'none' : type === 'secondary' ? 'none' : '1px solid gray'};
    cursor: pointer;
    margin: 10px auto;
    align-items: center;

    /* font-size: 16px; */
    font-family: inherit;
    font-weight: ${({ type }) => type === 'primary' ? 500 : type === 'secondary' ? 600 : 400};
    color: ${({ type }) => type === 'primary' ? '#fff' : type === 'secondary' ? '#fff' : 'gray'};
    background-color: ${({ type }) => type === 'primary' ? '#058335' : type === 'secondary' ? '#f35858' : 'white'};

    display: flex;
    justify-content: center;

    span {
        padding-left: 8px;
    }
    
`

// #f35858 -red
// #058335 -blue