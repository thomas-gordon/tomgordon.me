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

import React, { PropTypes,PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const AppWrapper = styled.div`
  width:100%;
  height:100%;
  min-width:100%;
  min-height:100%;
`;
const ChildrenWrapper = styled.div`
  position:relative;
  padding:60px;
  max-width:640px;
  margin:0 auto;
  text-align:center;
  p{
    font-size:30px;
    font-family: Impact, arial, sans-serif
  }
  p:nth-child(2){
    font-size:60px;
    font-family: Papyrus, arial, sans-serif
  }
`;

const isPlexUp = true;
const Up = (<div>
    <p>Plex should be:</p>
    <p>🎉 Working! 🎉</p>
    <p>If it's not working, contact Tom!</p>
</div>)
const Down = (<div>
   <p>Plex is:</p>
   <p>🤮 Down! 🤮 </p>
   <p>I'm getting content or dealing with a network issue. Check back here in an hour!</p>
</div>)

class PlexPage extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <ChildrenWrapper>
          {isPlexUp === true ? Up : Down}
        </ChildrenWrapper>
      </AppWrapper>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(PlexPage);
