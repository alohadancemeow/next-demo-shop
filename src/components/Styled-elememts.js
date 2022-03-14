import styled from 'styled-components'

export const Button = styled.button`
    width: 80%;
    height: 50px;
    border-radius: 3px;
    border: ${({ type }) => type === 'primary' ? 'none'
        : type === 'secondary' ? 'none'
            : type === 'accent' ? 'none'
                : '1px solid gray'
    };
    cursor: pointer;
    margin: 10px auto;
    align-items: center;

    /* font-size: 16px; */
    font-family: inherit;
    font-weight: ${({ type }) => type === 'primary' ? 500 : type === 'secondary' ? 600 : 400};
    color: ${({ theme, type }) => type === 'primary' ? theme.textColors.primary
        : type === 'secondary' ? theme.textColors.primary
            : type === 'accent' ? theme.textColors.primary
                : theme.textColors.secondary
    };
    background-color: ${({ theme, type }) => type === 'primary' ? theme.colors.primary
        : type === 'secondary' ? theme.colors.secondary
            : type === 'accent' ? theme.colors.accent
                : 'white'
    };

    display: flex;
    justify-content: center;

    span {
        padding-left: 8px;
    }
    
`