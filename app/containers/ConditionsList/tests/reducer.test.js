import { fromJS } from 'immutable';
import conditionsListReducer from '../reducer';

describe('conditionsListReducer', () => {
  it('returns the initial state', () => {
    expect(conditionsListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
