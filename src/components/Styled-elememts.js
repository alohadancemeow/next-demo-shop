import styled from 'styled-components'
import { Button } from 'antd'


export const StyledButton = styled(Button)`
    &.ant-btn {
        border-radius: 3px;
        margin: 10px auto;
        width: 80%;
        height: 50px;
        align-items: center;
        font-family: inherit;
        /* font-weight: ${({ variant }) => variant === 'primary' ? 500 : variant === 'secondary' ? 600 : 400}; */

        border: ${({ variant }) => variant === 'primary' ? 'none'
        : variant === 'secondary' ? 'none'
            : variant === 'accent' ? 'none'
                : '1px solid gray'
         };
        color: ${({ theme, variant }) => variant === 'primary' ? theme.textColors.primary
        : variant === 'secondary' ? theme.textColors.primary
            : variant === 'accent' ? theme.textColors.primary
                : theme.textColors.secondary
         };
        background-color: ${({ theme, variant }) => variant === 'primary' ? theme.colors.primary
        : variant === 'secondary' ? theme.colors.secondary
            : variant === 'accent' ? theme.colors.accent
                : 'white'
        };
    }
`