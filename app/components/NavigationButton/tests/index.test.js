import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';
import NavigationButton from '../index';

describe('<NavigationButton />', () => {
  it('expect it to render a button', () => {
    const button = shallow(<NavigationButton buttonText="foo" buttonLink="bar" />);
    expect(button.find('Button').exists());
  });
  it('should display the title passed to it', () => {
    const button = shallow(<NavigationButton buttonText="foo" buttonLink="bar" />);
    expect(
      button
        .find('span')
        .first()
        .text(),
    ).toEqual('bar');
  });
});
