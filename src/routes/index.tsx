import { createFileRoute } from "@tanstack/react-router";

import { AppWrapper, Avatar, ChildrenWrapper } from "../components/styles";
import Me from "./tomgordon.jpg";
import LinkList from "../components/LinkList";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <AppWrapper>
      <Avatar>
        <img src={Me} width={100} alt={"Tom Gordon"} title={"Tom Gordon"} />
      </Avatar>
      <ChildrenWrapper>
        <h1>Hi, I′m Tom. </h1>
        <h2>
          I create with the internet to try and make the world a better place.
        </h2>
        <p>
          I call myself a Frontend developer because my focus and interest in
          development is on the user experience delivered through forward
          thinking, speedy technology. I always aim to deliver a given digital
          project along with a high degree of compatibility across the myriad
          platforms used to consume the web. Having had 10 years experience, I
          am able to adjust the delivery of a project according to the relevant{" "}
          <a href="https://en.wikipedia.org/wiki/Project_management_triangle">
            time/cost/quality
          </a>{" "}
          paradigm.
        </p>
        <p>
          I began my development career with simple HTML template cutup and
          since then my skillset and ability has expanded to the point where I
          can deploy whole responsive React apps by myself, from design through
          to deployment.
        </p>
        <p>
          I am well versed in Agile development, having worked on projects that
          land all along the spectrum from complete waterfall to Agile SCRUM.
        </p>
        <h3>
          Currently at work I′m using the following tools to get the job done.
        </h3>
        <ul>
          <li>
            Tech Libraries:{" "}
            <a href="https://facebook.github.io/react/" target="_blank">
              React
            </a>
            ,{" "}
            <a href="https://facebook.github.io/react-native/" target="_blank">
              React Native
            </a>
            ,{" "}
            <a href="https://www.djangoproject.com/" target="_blank">
              Django
            </a>
            ,{" "}
            <a href="https://wordpress.com" target="_blank">
              Wordpress
            </a>
          </li>
          <li>
            Build tools:{" "}
            <a href="https://docs.npmjs.com/misc/scripts" target="_blank">
              NPM Scripts
            </a>
            ,{" "}
            <a href="https://webpack.github.io/" target="_blank">
              webpack
            </a>
            ,{" "}
            <a href="http://gulpjs.com/" target="_blank">
              gulp
            </a>
            ,{" "}
            <a href="https://gruntjs.com/" target="_blank">
              grunt
            </a>
          </li>
          <li>
            Testing:{" "}
            <a href="https://facebook.github.io/jest/" target="_blank">
              Jest
            </a>
            ,{" "}
            <a href="https://www.browserstack.com/" target="_blank">
              BrowserStack
            </a>
          </li>
          <li>
            Analytics:{" "}
            <a
              href="https://analytics.google.com/analytics/web/"
              target="_blank"
            >
              Google Analytics
            </a>
            ,{" "}
            <a href="https://mixpanel.com/" target="_blank">
              Mixpanel
            </a>
          </li>
          <li>
            Project Management:{" "}
            <a href="https://www.atlassian.com/software/jira" target="_blank">
              Atlassian Jira
            </a>
          </li>
          <li>
            Design:{" "}
            <a
              href="http://www.adobe.com/au/creativecloud.html"
              target="_blank"
            >
              Adobe CC Suite
            </a>
            ,{" "}
            <a href="http://www.sketchapp.com" target="_blank">
              Sketch
            </a>
          </li>
          <li>
            Wireframing:{" "}
            <a href="https://www.axure.com/" target="_blank">
              Axure
            </a>
            ,{" "}
            <a href="https://www.invisionapp.com/" target="_blank">
              InVision
            </a>
          </li>
          <li>
            Animation:{" "}
            <a href="https://greensock.com/" target="_blank">
              GreenSock
            </a>
          </li>
          <li>
            Code Editing:{" "}
            <a href="https://code.visualstudio.com/" target="_blank">
              VSCode,
            </a>{" "}
            <a href="https://www.jetbrains.com/" target="_blank">
              Jetbrains Intellij (Webstorm, PyCharm, RubyMine)
            </a>
          </li>
          <li>
            Deployment:{" "}
            <a href="https://www.docker.com/" target="_blank">
              Docker
            </a>
          </li>
        </ul>
        <h3>Contact and see what I′m up to:</h3>
        <LinkList />
        <h3>Recent work</h3>
        <ul>
          <li>
            <a href="https://makeeverydropcount.com.au/" target="_blank">
              Yarra Valley Water | Make Every Drop Campaign
            </a>
            : I developed the entire project including animations and wordpress
            setup.
          </li>
          <li>
            <a href="https://www.yvw.com.au/" target="_blank">
              Yarra Valley Water | Website
            </a>
            : I worked on the frontend components and the style guide onsite,
            while assisting with integrating agile processes into Yarra Valley′s
            project management style.
          </li>
          <li>
            <a href="https://www.dumbofeather.com" target="_blank">
              Dumbo Feather
            </a>
            : I manage the complex ecommerce requirements of this popular
            australian publication.
          </li>
          <li>
            <a href="https://www.slv.vic.gov.au/" target="_blank">
              State Library Victoria | Website
            </a>
            : I worked on the frontend styleguide and component development, and
            assisted with skilling up the SLV development team in best practices
            around frontend development and agile project management.
          </li>
          <li>
            <a href="https://www.glenirispantry.com.au/" target="_blank">
              Glen Iris Pantry | Website
            </a>
            : I delivered the entire site via Squarespace and updated the cafe′s
            digital portfolio.
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.commbank.com.au/" target="_blank">
              CBA (React app)
            </a>
          </li>
          <li>
            <a href="https://www.headspace.org.au/" target="_blank">
              Headspace
            </a>
          </li>
          <li>
            <a href="http://www.fya.org.au/" target="_blank">
              FYA
            </a>
          </li>
        </ul>
      </ChildrenWrapper>
    </AppWrapper>
  );
}
