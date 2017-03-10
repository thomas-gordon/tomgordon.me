/**
 *
 * Medium
 *
 */

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import shortid from 'shortid';

class Medium extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    title: PropTypes.string,
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  };
  static defaultProps = {
    title: 'Medium',
    fill: '#ffffff',
    height: 20,
    width: 20,
  };

  render() {
    const shortidPass = shortid();
    return (
      <svg version="1.1" width={this.props.width} height={this.props.height} viewBox="0 0 1792 1792" aria-labelledby={shortidPass}>
        <title id={shortidPass}>{this.props.title}</title>
        <path fill={this.props.fill} d="M597 421v1173q0 25-12.5 42.5t-36.5 17.5q-17 0-33-8l-465-233q-21-10-35.5-33.5t-14.5-46.5v-1140q0-20 10-34t29-14q14 0 44 15l511 256q3 3 3 5zm64 101l534 866-534-266v-600zm1131 18v1054q0 25-14 40.5t-38 15.5-47-13l-441-220zm-3-120q0 3-256.5 419.5t-300.5 487.5l-390-634 324-527q17-28 52-28 14 0 26 6l541 270q4 2 4 6z" />
      </svg>
    );
  }
}

export default Medium;
