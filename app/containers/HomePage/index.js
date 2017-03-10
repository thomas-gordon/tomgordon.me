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
          <p>I call myself a Frontend developer because my focus and interest in development is on the user experience
            delivered through forward thinking, speedy technology. I always aim to deliver a given digital project along with a high degree of compatibility
            across the myriad platforms used to consume the web. Having had 10 years experience, I am able to adjust the delivery of a project according to the
            relevant <a href="https://en.wikipedia.org/wiki/Project_management_triangle">time/cost/quality</a> paradigm.</p>
          <p>I began my development career with simple HTML template cutup and since then my skillset and ability has
            expanded to the point where I can deploy whole responsive React apps by myself, from design through to deployment.</p>
          <p>I am well versed in Agile development, having worked on projects that land all along the spectrum from complete waterfall to Agile SCRUM.</p>
          <h3>Currently at work I′m using the following tools to get the job done.</h3>
          <ul>
            <li>Tech Libraries: <a href="https://facebook.github.io/react/" target="_blank">React</a>, <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a>, <a href="https://www.djangoproject.com/" target="_blank">Django</a>, <a href="https://wordpress.com" target="_blank">Wordpress</a></li>
            <li>Build tools: <a href="https://docs.npmjs.com/misc/scripts" target="_blank">NPM Scripts</a>, <a href="https://webpack.github.io/" target="_blank">webpack</a>, <a href="http://gulpjs.com/" target="_blank">gulp</a>, <a href="https://gruntjs.com/" target="_blank">grunt</a></li>
            <li>Testing: <a href="https://facebook.github.io/jest/" target="_blank">Jest</a>, <a href="https://www.browserstack.com/" target="_blank">BrowserStack</a></li>
            <li>Analytics: <a href="https://analytics.google.com/analytics/web/" target="_blank">Google Analytics</a>, <a href="https://mixpanel.com/" target="_blank">Mixpanel</a></li>
            <li>Project Management: <a href="https://www.atlassian.com/software/jira" target="_blank">Atlassian Jira</a></li>
            <li>Wireframing: <a href="https://www.axure.com/" target="_blank">Axure</a>, <a href="https://www.invisionapp.com/" target="_blank">InVision</a></li>
            <li>Design: <a href="http://www.adobe.com/au/creativecloud.html" target="_blank">Adobe CC Suite</a></li>
            <li>Animation: <a href="https://greensock.com/" target="_blank">GreenSock</a></li>
            <li>Code Editing: <a href="https://www.jetbrains.com/" target="_blank">Jetbrains Intellij (Webstorm, PyCharm, RubyMine)</a></li>
            <li>Deployment: <a href="https://www.docker.com/" target="_blank">Docker</a></li>
          </ul>
          <h3>Contact and see what I′m up to:</h3>
          <LinkList links={this.props.links} icons={this.props.icons} />
          <h3>Recent work</h3>
          <ul>
            <li><a href="http://pasa.insw.com/" target="_blank">Infrastructure NSW Pool | Webapp</a>: I completed the entire build in React, using Redux and React-router to allow
            proper data flow management.</li>
            <li><a href="https://www.yvw.com.au/" target="_blank">Yarra Valley Water | Website</a>: I worked on the frontend components and the style guide onsite, while assisting with integrating
            agile processes into Yarra Valley′s project management style,</li>
            <li><a href="https://www.slv.vic.gov.au/" target="_blank">State Library Victoria | Website</a>: I worked on the frontend styleguide and component development, and assisted with
            skilling up the SLV development team in best practices around frontend development and agile project management.</li>
            <li><a href="https://www.glenirispantry.com.au/" target="_blank">Glen Iris Pantry | Website</a>: I delivered the entire site via Squarespace and updated the cafe′s digital
            portfolio.</li>
          </ul>
          <p>There are many things I′ve worked on with no public access; I have deployed apps for:</p>
          <ul>
            <li><a href="https://www.commbank.com.au/" target="_blank">CBA</a></li>
            <li><a href="https://www.headspace.org.au/" target="_blank">Headspace</a></li>
            <li><a href="https://www.climatecouncil.org.au/" target="_blank">Climate Council</a></li>
            <li><a href="http://www.fya.org.au/" target="_blank">FYA</a></li>
          </ul>
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
