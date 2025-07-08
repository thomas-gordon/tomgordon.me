/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import { Children } from "react";
import DefaultButton from "./Default";
import LinkButton from "./Link";
import InputButton from "./Input";
import ExternalLinkButton from "./ExternalLink";

function Button(props) {
  const buttonProps = {
    href: props.href ? props.href : null,
    to: props.to ? props.to : null,
    onClick: props.onClick ? props.onClick : null,
    children: props.children ? Children.toArray(props.children) : null,
    size: props.size ? props.size : "default",
    value: props.value ? props.value : null,
    target: props.target ? props.target : null,
  };

  // <button></button>
  let button = <DefaultButton {...buttonProps} />;

  // <Link></Link>
  if (buttonProps.to !== null) {
    button = <LinkButton {...buttonProps} />;
  }

  if (buttonProps.href !== null) {
    button = <ExternalLinkButton {...buttonProps} />;
  }

  // <input type="submit" />
  if (!buttonProps.children) {
    button = <InputButton type="submit" {...buttonProps} />;
  }

  return button;
}
export default Button;
