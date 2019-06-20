import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the conditionDetails state domain
 */

const selectConditionDetailsDomain = state =>
  state.get('conditionDetails', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ConditionDetails
 */

const makeSelectConditionDetails = () =>
  createSelector(selectConditionDetailsDomain, substate => substate.toJS());

export default makeSelectConditionDetails;
export { selectConditionDetailsDomain };
