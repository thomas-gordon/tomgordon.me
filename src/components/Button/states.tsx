import { css } from 'styled-components';
const buttonStates = css`
    &:active{
        background:#0f0;
    }
    &:hover{
        cursor:pointer;
        background:red;
        &:active{
           background:#0f0;
        }
    }
`;
export default buttonStates;
