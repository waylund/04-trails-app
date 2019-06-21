import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the deleteMe state domain
 */

const selectDeleteMeDomain = state => state.get('deleteMe', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DeleteMe
 */

const makeSelectDeleteMe = () => createSelector(selectDeleteMeDomain, substate => substate.toJS());

export default makeSelectDeleteMe;
export { selectDeleteMeDomain };
