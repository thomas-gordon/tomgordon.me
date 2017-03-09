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

import { fromJS } from 'immutable';

const initialState = fromJS({
  links: [
    {
      text: 'email me',
      url: 'mailto:thomasgordon02@gmail.com',
      icon: 'envelope',
      class: 'js-transform-email',
    },
    {
      text: 'linked in',
      url: 'http://www.linkedin.com/profile/view?id=46634189&trk=tab_pro',
      icon: 'linkedin',
    },
    {
      text: 'github',
      url: 'http://github.com/thomas-gordon',
      icon: 'github',
    },
    {
      text: 'twitter',
      url: 'http://www.twitter.com/tomgwebdev',
      icon: 'twitter',
    },
    {
      text: 'resume',
      url: 'https://docs.google.com/document/d/1Rw7b9PkSPXlfwEWWLziUkVCC5CsWF0Pmbv1R0jZssf8/',
      icon: 'book',
    },
    {
      text: 'medium',
      url: 'https://medium.com/@tomgwebdev',
      icon: 'pencil',
    },
  ]
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default homePageReducer;
