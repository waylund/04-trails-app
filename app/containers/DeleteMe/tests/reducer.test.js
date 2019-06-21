import { fromJS } from 'immutable';
import deleteMeReducer from '../reducer';

describe('deleteMeReducer', () => {
  it('returns the initial state', () => {
    expect(deleteMeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
