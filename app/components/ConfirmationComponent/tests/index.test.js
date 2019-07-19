import React from 'react';
import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import ConfirmationComponent from '../index';

describe('<ConfirmationComponent />', () => {
  it('Expect to have unit tests specified', () => {
    expect(true).toEqual(false);
  });
  it('expect confirmation component to have two href buttons', () => {
    const wrap = mount(<ConfirmationComponent />);
    console.log(wrap.childAt(0).html());
  });
  it('Expect new submission button to go to submission page', () => {});
  it('Expect view sumissions page to got to view page', () => {});
});
