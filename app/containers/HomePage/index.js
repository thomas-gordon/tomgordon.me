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

import React, { PropTypes } from 'react';
import LinkList from 'components/LinkList';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Me from './tomgordon.jpg';

import {
  makeLinks,
  makeIcons,
} from './selectors';

const AppWrapper = styled.div`
  width:100%;
  height:100%;
  min-width:100%;
  min-height:100%;
`;
const ChildrenWrapper = styled.div`
  position:relative; 
  padding:0 20px 20px 20px;
  max-width:640px;
  margin:0 auto;
`;

const Avatar = styled.header`
  max-width:640px;
  margin:0 auto;
  border-bottom:1px solid #c0c0c0;
`;

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    links: PropTypes.object,
    icons: PropTypes.object,
  };

  render() {
    return (
      <AppWrapper>
        <Avatar>
          <img
            src={Me}
            width={100}
            alt={'Tom Gordon'}
            title={'Tom Gordon'}
          />
        </Avatar>
        <ChildrenWrapper>
          <h1>Hi, I′m Tom. </h1>
          <h2>I create with the internet to try and make the world a better place.
          </h2>
          <p>I call myself a Frontend developer, as my focus and interest in development is on excellent user experience
            delivered through
            forward thinking technology. I aim to deliver a given digital platform across the myriad platforms
            used to consume the given digital platform. Starting simply with HTML templates, my skillset and ability has
            expanded to the point where I can create whole apps by myself, from design through to deployment..</p>
          <h3>Currently at work I′m using the following tools to get the job done.</h3>
          <ul>
            <li>Tech Libraries: <a href="https://facebook.github.io/react/" target="_blank">React</a>, <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a>, <a href="https://www.djangoproject.com/" target="_blank">Django</a>, <a href="https://wordpress.com" target="_blank">Wordpress</a></li>
            <li>Build tools: <a href="https://docs.npmjs.com/misc/scripts" target="_blank">NPM Scripts</a>, <a href="https://webpack.github.io/" target="_blank">webpack</a>, <a href="http://gulpjs.com/" target="_blank">gulp</a>, <a href="https://gruntjs.com/" target="_blank">grunt</a></li>
            <li>Testing: <a href="https://facebook.github.io/jest/" target="_blank">Jest</a>, <a href="https://www.browserstack.com/" target="_blank">BrowserStack</a></li>
            <li>Analytics: <a href="https://analytics.google.com/analytics/web/" target="_blank">Google Analytics</a>, <a href="https://mixpanel.com/" target="_blank">Mixpanel</a></li>
            <li>Wireframing: <a href="https://www.axure.com/" target="_blank">Axure</a>, <a href="https://www.invisionapp.com/" target="_blank">InVision</a></li>
            <li>Design: <a href="http://www.adobe.com/au/creativecloud.html" target="_blank">Adobe CC Suite</a></li>
            <li>Animation: <a href="https://greensock.com/" target="_blank">GreenSock</a></li>
            <li>Code Editing: <a href="https://www.jetbrains.com/" target="_blank">Jetbrains Intellij (Webstorm, PyCharm, RubyMine)</a></li>
            <li>Deployment: <a href="https://www.docker.com/" target="_blank">Docker</a></li>
          </ul>
          <h3>See what I am up to:</h3>
          <LinkList links={this.props.links} icons={this.props.icons} />
        </ChildrenWrapper>
      </AppWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  links: makeLinks(),
  icons: makeIcons(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(HomePage);
