/**
 *
 * Github
 *
 */

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import shortid from 'shortid';

class Codepen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    title: PropTypes.string,
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  };
  static defaultProps = {
    title: 'Codepen',
    fill: '#ffffff',
    height: 20,
    width: 20,
  };

  render() {
    const shortidPass = shortid();
    return (
      <svg version="1.1" width={this.props.width} height={this.props.height} viewBox="0 0 1792 1792" aria-labelledby={shortidPass}>
        <title id={shortidPass}>{this.props.title}</title>
        <path
          fill={this.props.fill}
          d="M216 1169l603 402v-359l-334-223zm-62-144l193-129-193-129v258zm819 546l603-402-269-180-334 223v359zm-77-493l272-182-272-182-272 182zm-411-275l334-223v-359l-603 402zm960 93l193 129v-258zm-138-93l269-180-603-402v359zm485-180v546q0 41-34 64l-819 546q-21 13-43 13t-43-13l-819-546q-34-23-34-64v-546q0-41 34-64l819-546q21-13 43-13t43 13l819 546q34 23 34 64z"
        />
      </svg>
    );
  }
}
export default Codepen;
