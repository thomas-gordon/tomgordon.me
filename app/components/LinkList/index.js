/**
*
* LinkList
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import ListItem from 'components/ListItem';
import Ul from './Ul';

function LinkList(props) {
  return (
    <Ul>
      {props.links.map((link) => <ListItem key={link.get('id')} link={link} icons={props.icons} />)}
    </Ul>
  );
}

LinkList.propTypes = {
  links: PropTypes.object,
  icons: PropTypes.object,
};

export default LinkList;
