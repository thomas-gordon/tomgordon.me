import { jsxs, jsx } from 'react/jsx-runtime';
import { s as styled, c as css } from './ssr.mjs';
import { Children } from 'react';
import { Link } from '@tanstack/react-router';
import { z } from 'zod';
import 'tslib';
import 'shallowequal';
import 'stylis';
import 'stream';
import 'fontfaceobserver';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import '@tanstack/router-core/ssr/server';
import 'node:async_hooks';
import 'tiny-invariant';
import '@tanstack/react-router/ssr/server';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
`;
const ChildrenWrapper = styled.div`
  position: relative;
  padding: 0 20px 20px 20px;
  max-width: 640px;
  margin: 0 auto;
`;
const Avatar = styled.header`
  max-width: 640px;
  margin: 0 auto;
  border-bottom: 1px solid #c0c0c0;
`;
const Me = "/assets/tomgordon-Cw3f0b-r.jpg";
const viewBreakPoint = 400;
const links = [{ "id": 1, "text": "Email Me", "url": "mailto:thomasgordon02@gmail.com", "icon": "email" }, { "id": 2, "text": "Codepen Experiments", "url": "http://codepen.io/thomas-gordon/", "icon": "codepen" }, { "id": 3, "text": "LinkedIn", "url": "https://www.linkedin.com/in/thomas-gordon-46574b13", "icon": "linkedIn" }, { "id": 4, "text": "Github", "url": "http://github.com/thomas-gordon", "icon": "github" }, { "id": 5, "text": "Twitter", "url": "http://www.twitter.com/tomgwebdev", "icon": "twitter" }, { "id": 6, "text": "Resume", "url": "https://docs.google.com/document/d/1Rw7b9PkSPXlfwEWWLziUkVCC5CsWF0Pmbv1R0jZssf8/", "icon": "resume" }, { "id": 7, "text": "Medium", "url": "https://medium.com/@tomgwebdev", "icon": "medium" }];
const data = {
  viewBreakPoint,
  links
};
const spacing = { "unit": 10 };
const cssData = {
  spacing
};
const buttonStyles = css`
  padding: ${cssData.spacing.unit}px ${cssData.spacing.unit * 2}px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  font-weight: 700;
  outline: none;
  border: 1px solid #000;
  position: relative;
  transition: all 0.3s;
  background: white;
  color: #666;
  box-shadow: 0 6px #ccc;
  transition: none;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 20px;
    height: 20px;
    fill: #666;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px #666;
    top: 2px;
  }
  &:active {
    box-shadow: 0 0 #ccc;
    top: 6px;
  }
  svg {
    margin-left: 5px;
    top: -2px;
    position: relative;
  }
`;
const Wrapper$3 = styled.button`
  ${buttonStyles}
`;
const Wrapper$2 = styled(Link)`
  ${buttonStyles};
`;
const Wrapper$1 = styled.input`
  ${buttonStyles}
`;
const Wrapper = styled.a`
  ${buttonStyles};
`;
function Button(props) {
  const buttonProps = {
    href: props.href ? props.href : null,
    to: props.to ? props.to : null,
    onClick: props.onClick ? props.onClick : null,
    children: props.children ? Children.toArray(props.children) : null,
    size: props.size ? props.size : "default",
    value: props.value ? props.value : null,
    target: props.target ? props.target : null
  };
  let button = /* @__PURE__ */ jsx(Wrapper$3, { ...buttonProps });
  if (buttonProps.to !== null) {
    button = /* @__PURE__ */ jsx(Wrapper$2, { ...buttonProps });
  }
  if (buttonProps.href !== null) {
    button = /* @__PURE__ */ jsx(Wrapper, { ...buttonProps });
  }
  if (!buttonProps.children) {
    button = /* @__PURE__ */ jsx(Wrapper$1, { type: "submit", ...buttonProps });
  }
  return button;
}
const Resume$1 = () => /* @__PURE__ */ jsx("svg", { version: "1.1", viewBox: "0 0 1792 1792", children: /* @__PURE__ */ jsx("path", { d: "M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" }) });
const Medium = () => /* @__PURE__ */ jsx("svg", { version: "1.1", viewBox: "0 0 1792 1792", children: /* @__PURE__ */ jsx("path", { d: "M597 421v1173q0 25-12.5 42.5t-36.5 17.5q-17 0-33-8l-465-233q-21-10-35.5-33.5t-14.5-46.5v-1140q0-20 10-34t29-14q14 0 44 15l511 256q3 3 3 5zm64 101l534 866-534-266v-600zm1131 18v1054q0 25-14 40.5t-38 15.5-47-13l-441-220zm-3-120q0 3-256.5 419.5t-300.5 487.5l-390-634 324-527q17-28 52-28 14 0 26 6l541 270q4 2 4 6z" }) });
const Github = () => /* @__PURE__ */ jsx("svg", { version: "1.1", viewBox: "0 0 1792 1792", children: /* @__PURE__ */ jsx("path", { d: "M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" }) });
const Resume = () => /* @__PURE__ */ jsx("svg", { version: "1.1", viewBox: "0 0 1792 1792", children: /* @__PURE__ */ jsx("path", { d: "M888 1184l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672h-288v-288zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z" }) });
const LinkedIn = () => /* @__PURE__ */ jsx("svg", { version: "1.1", viewBox: "0 0 1792 1792", children: /* @__PURE__ */ jsx("path", { d: "M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" }) });
const Email = () => /* @__PURE__ */ jsx("svg", { version: "1.1", viewBox: "0 0 1792 1792", children: /* @__PURE__ */ jsx("path", { d: "M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" }) });
const Codepen = () => /* @__PURE__ */ jsx("svg", { version: "1.1", viewBox: "0 0 1792 1792", children: /* @__PURE__ */ jsx("path", { d: "M216 1169l603 402v-359l-334-223zm-62-144l193-129-193-129v258zm819 546l603-402-269-180-334 223v359zm-77-493l272-182-272-182-272 182zm-411-275l334-223v-359l-603 402zm960 93l193 129v-258zm-138-93l269-180-603-402v359zm485-180v546q0 41-34 64l-819 546q-21 13-43 13t-43-13l-819-546q-34-23-34-64v-546q0-41 34-64l819-546q21-13 43-13t43 13l819 546q34 23 34 64z" }) });
const Li = styled.li`
  display: block;
  margin: 0 0 16px 0;
  @media (min-width: ${data.viewBreakPoint}px) {
    display: inline-block;
    margin: 0 10px 10px 0;
  }
`;
const iconSchema = z.enum([
  "email",
  "codepen",
  "linkedIn",
  "github",
  "twitter",
  "resume",
  "medium"
]);
const getIcon = (icon) => {
  const parsedIcon = iconSchema.parse(icon);
  switch (parsedIcon) {
    case "email":
      return /* @__PURE__ */ jsx(Email, {});
    case "codepen":
      return /* @__PURE__ */ jsx(Codepen, {});
    case "linkedIn":
      return /* @__PURE__ */ jsx(LinkedIn, {});
    case "github":
      return /* @__PURE__ */ jsx(Github, {});
    case "twitter":
      return /* @__PURE__ */ jsx(Resume$1, {});
    case "resume":
      return /* @__PURE__ */ jsx(Resume, {});
    case "medium":
      return /* @__PURE__ */ jsx(Medium, {});
    default:
      return null;
  }
};
const ListItem = (link) => /* @__PURE__ */ jsx(Li, { children: /* @__PURE__ */ jsxs(Button, { href: link.url, target: "_blank", children: [
  link.text,
  getIcon(link.icon)
] }) });
const Ul = styled.ul`
  list-style: none;
  margin: 0 0 20px 0;
  width: 100%;
  padding: 0;
`;
const LinkList = () => {
  return /* @__PURE__ */ jsx(Ul, { children: data.links.map((link) => /* @__PURE__ */ jsx(ListItem, { ...link }, link.id)) });
};
const SplitComponent = function Home() {
  return /* @__PURE__ */ jsxs(AppWrapper, { children: [
    /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx("img", { src: Me, width: 100, alt: "Tom Gordon", title: "Tom Gordon" }) }),
    /* @__PURE__ */ jsxs(ChildrenWrapper, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Hi, I\u2032m Tom. " }),
      /* @__PURE__ */ jsx("h2", { children: "I create with the internet to try and make the world a better place." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "I call myself a Frontend developer because my focus and interest in development is on the user experience delivered through forward thinking, speedy technology. I always aim to deliver a given digital project along with a high degree of compatibility across the myriad platforms used to consume the web. Having had 10 years experience, I am able to adjust the delivery of a project according to the relevant",
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://en.wikipedia.org/wiki/Project_management_triangle", children: "time/cost/quality" }),
        " ",
        "paradigm."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "I began my development career with simple HTML template cutup and since then my skillset and ability has expanded to the point where I can deploy whole responsive React apps by myself, from design through to deployment." }),
      /* @__PURE__ */ jsx("p", { children: "I am well versed in Agile development, having worked on projects that land all along the spectrum from complete waterfall to Agile SCRUM." }),
      /* @__PURE__ */ jsx("h3", { children: "Currently at work I\u2032m using the following tools to get the job done." }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "Tech Libraries:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://facebook.github.io/react/", target: "_blank", children: "React" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://facebook.github.io/react-native/", target: "_blank", children: "React Native" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.djangoproject.com/", target: "_blank", children: "Django" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://wordpress.com", target: "_blank", children: "Wordpress" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Build tools:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://docs.npmjs.com/misc/scripts", target: "_blank", children: "NPM Scripts" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://webpack.github.io/", target: "_blank", children: "webpack" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("a", { href: "http://gulpjs.com/", target: "_blank", children: "gulp" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://gruntjs.com/", target: "_blank", children: "grunt" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Testing:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://facebook.github.io/jest/", target: "_blank", children: "Jest" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.browserstack.com/", target: "_blank", children: "BrowserStack" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Analytics:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://analytics.google.com/analytics/web/", target: "_blank", children: "Google Analytics" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://mixpanel.com/", target: "_blank", children: "Mixpanel" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Project Management:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.atlassian.com/software/jira", target: "_blank", children: "Atlassian Jira" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Design:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "http://www.adobe.com/au/creativecloud.html", target: "_blank", children: "Adobe CC Suite" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("a", { href: "http://www.sketchapp.com", target: "_blank", children: "Sketch" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Wireframing:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.axure.com/", target: "_blank", children: "Axure" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.invisionapp.com/", target: "_blank", children: "InVision" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Animation:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://greensock.com/", target: "_blank", children: "GreenSock" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Code Editing:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://code.visualstudio.com/", target: "_blank", children: "VSCode," }),
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.jetbrains.com/", target: "_blank", children: "Jetbrains Intellij (Webstorm, PyCharm, RubyMine)" })
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Deployment:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.docker.com/", target: "_blank", children: "Docker" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { children: "Contact and see what I\u2032m up to:" }),
      /* @__PURE__ */ jsx(LinkList, {}),
      /* @__PURE__ */ jsx("h3", { children: "Recent work" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("a", { href: "https://makeeverydropcount.com.au/", target: "_blank", children: "Yarra Valley Water | Make Every Drop Campaign" }),
          ": I developed the entire project including animations and wordpress setup."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.yvw.com.au/", target: "_blank", children: "Yarra Valley Water | Website" }),
          ": I worked on the frontend components and the style guide onsite, while assisting with integrating agile processes into Yarra Valley\u2032s project management style."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.dumbofeather.com", target: "_blank", children: "Dumbo Feather" }),
          ": I manage the complex ecommerce requirements of this popular australian publication."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.slv.vic.gov.au/", target: "_blank", children: "State Library Victoria | Website" }),
          ": I worked on the frontend styleguide and component development, and assisted with skilling up the SLV development team in best practices around frontend development and agile project management."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.glenirispantry.com.au/", target: "_blank", children: "Glen Iris Pantry | Website" }),
          ": I delivered the entire site via Squarespace and updated the cafe\u2032s digital portfolio."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.commbank.com.au/", target: "_blank", children: "CBA (React app)" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.headspace.org.au/", target: "_blank", children: "Headspace" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "http://www.fya.org.au/", target: "_blank", children: "FYA" }) })
      ] })
    ] })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=index-DVHbmHG0.mjs.map
