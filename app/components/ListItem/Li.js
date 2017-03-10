import styled from 'styled-components';
import globalData from 'data/global.json';

const Li = styled.li`
  display:block; 
  margin: 0 0 16px 0;
  @media (min-width: ${globalData.viewBreakPoint}px) {
    display:inline-block; 
    margin: 0 10px 10px 0;
  }
`;

export default Li;
