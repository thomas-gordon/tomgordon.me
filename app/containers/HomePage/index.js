/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Me from './tomgordon.jpg';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const AppWrapper = styled.div`
    width:100%;
    height:100%;
    min-width:100%;
    min-height:100%;
`;
const ChildrenWrapper = styled.div`
  position:relative; 
  padding:20px;
`;

const style = {
  padding: '10px 20px'
}

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppWrapper>
        <ChildrenWrapper>
        <Paper style={style} zDepth={1} rounded={false} >
          <p className="site-avatar"><img src={Me} alt="Tom Gordon" width="200" /></p>
          <h1 className="site-title">Hi, I'm Tom. </h1>
          <h2>I develop the internet to make the world a nicer place at <a href="http://www.squareweave.com.au">Squareweave</a>.
          </h2>
        </Paper>
        </ChildrenWrapper>
      </AppWrapper>
    );
  }
}
