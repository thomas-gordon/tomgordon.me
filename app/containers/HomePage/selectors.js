/**
 * Searchpage selectors
 */

import { createSelector } from 'reselect';

const homepageView = (state) => state.get('homePage');

const makeLinks = () => createSelector(
  homepageView,
  (appState) => appState.get('links')
);

const makeIcons = () => createSelector(
  homepageView,
  (appState) => appState.get('icons')
);

export {
  makeLinks,
  makeIcons,
};
