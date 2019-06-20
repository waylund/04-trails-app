import { fromJS } from 'immutable';
import conditionDetailsReducer from '../reducer';

describe('conditionDetailsReducer', () => {
  it('returns the initial state', () => {
    expect(conditionDetailsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
