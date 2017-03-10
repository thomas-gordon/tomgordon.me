/**
*
* ListItem
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import Button from 'components/Button';

import Li from './Li';
function ListItem(props) {
  const icon = props.icons.get(props.link.get('icon')).toJS();
  icon.props.fill = '#666';
  return (
    <Li>
      <Button
        href={props.link.get('url')}
        target="_blank"
      >
        {props.link.get('text')}
        {icon}
      </Button>
    </Li>
  );
}

ListItem.propTypes = {
  link: PropTypes.object,
  icons: PropTypes.object,
};

export default ListItem;
