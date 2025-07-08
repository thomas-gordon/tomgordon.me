/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import { Children } from 'react'

import styles from './styles.module.css'
import { Link } from '@tanstack/react-router'

function Button(props) {
  const buttonProps = {
    href: props.href ? props.href : null,
    to: props.to ? props.to : null,
    onClick: props.onClick ? props.onClick : null,
    children: props.children ? Children.toArray(props.children) : null,
    size: props.size ? props.size : 'default',
    value: props.value ? props.value : null,
    target: props.target ? props.target : null,
    className: styles.button,
  }

  // <button></button>
  let button = <button {...buttonProps} />

  // <Link></Link>
  if (buttonProps.to !== null) {
    button = <Link {...buttonProps} />
  }

  if (buttonProps.href !== null) {
    button = <a {...buttonProps} />
  }

  // <input type="submit" />
  if (!buttonProps.children) {
    button = <button type="submit" {...buttonProps} />
  }

  return button
}
export default Button
