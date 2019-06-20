import { fromJS } from 'immutable';
import confirmationPageReducer from '../reducer';

describe('confirmationPageReducer', () => {
  it('returns the initial state', () => {
    expect(confirmationPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
