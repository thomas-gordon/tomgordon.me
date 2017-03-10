/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import React from 'react';
import { fromJS } from 'immutable';
import data from 'data/global.json';
import Twitter from 'components/SVG/Twitter';
import Medium from 'components/SVG/Medium';
import Github from 'components/SVG/Github';
import Resume from 'components/SVG/Resume';
import LinkedIn from 'components/SVG/LinkedIn';
import Email from 'components/SVG/Email';

const initialState = fromJS({
  links: data.links,
  icons: {
    twitter: (<Twitter />),
    medium: (<Medium />),
    github: (<Github />),
    resume: (<Resume />),
    linkedIn: (<LinkedIn />),
    email: (<Email />),
  },
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homePageReducer;
