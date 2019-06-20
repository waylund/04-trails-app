/*
 *
 * SubmissionForm actions
 *
 */

import { POST_CONDITION_SUCCESS } from './constants';

import { postConditionApi } from '../../api';

export function postConditionSuccess() {
  return {
    type: POST_CONDITION_SUCCESS,
  };
}

// ——————————THUNKS——————————

export function postCondition(condition) {
  return async dispatch => {
    const response = await postConditionApi(condition);
    console.log('NEW CONDITION ID: ', response.id);

    return dispatch(postConditionSuccess());
  };
}
