/*
 *
 * ConditionsList reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_CONDITIONS_SUCCESS } from './constants';

export const initialState = fromJS({
  conditions: [],
});

function conditionsListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONDITIONS_SUCCESS:
      return state.set('conditions', action.conditions);
    default:
      return state;
  }
}

export default conditionsListReducer;
