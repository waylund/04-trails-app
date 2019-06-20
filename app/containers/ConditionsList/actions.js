/*
 *
 * ConditionsList actions
 *
 */

import { GET_CONDITIONS_SUCCESS } from './constants';

import { getConditionsApi } from '../../api';

export function getConditionsSuccess(conditions) {
  return {
    type: GET_CONDITIONS_SUCCESS,
    conditions,
  };
}

// ——————————THUNKS——————————

export function getConditions() {
  return async dispatch => {
    const conditions = await getConditionsApi();

    return dispatch(getConditionsSuccess(conditions));
  };
}
