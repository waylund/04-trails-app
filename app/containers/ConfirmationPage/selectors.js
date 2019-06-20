import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the confirmationPage state domain
 */

const selectConfirmationPageDomain = state =>
  state.get('confirmationPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ConfirmationPage
 */

const makeSelectConfirmationPage = () =>
  createSelector(selectConfirmationPageDomain, substate => substate.toJS());

export default makeSelectConfirmationPage;
export { selectConfirmationPageDomain };
