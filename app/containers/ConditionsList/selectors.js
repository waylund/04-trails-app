import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the conditionsList state domain
 */

const selectConditionsListDomain = state =>
  state.get('conditionsList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ConditionsList
 */

const makeSelectConditionsList = () =>
  createSelector(selectConditionsListDomain, substate => substate.toJS());

export default makeSelectConditionsList;
export { selectConditionsListDomain };
