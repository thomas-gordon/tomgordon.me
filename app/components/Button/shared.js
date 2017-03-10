import cssData from 'data/css.json';
import { css } from 'styled-components';
const buttonStyles = css`
  padding:${cssData.spacing.unit}px ${cssData.spacing.unit * 2}px;
  cursor:pointer;
  display:block;
  text-decoration:none;
  font-weight:700;
  outline:none;
  border:1px solid #000;
  position:relative;
  transition:all 0.3s;
  background:white;
  color: #666;
  box-shadow: 0 6px #ccc;
  transition: none;
  &:hover{
    cursor:pointer;
    box-shadow: 0 4px #666;
    top: 2px;
  }
  &:active{
    box-shadow: 0 0 #ccc;
    top: 6px;
  }
  svg{
    margin-left:5px;
    top:-2px;
    position:relative;
  }
`;
export default buttonStyles;
