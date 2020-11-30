import React from 'react';
import { shallow } from 'enzyme';
import AppBody from './AppBody';

describe('AppBody', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AppBody />);
    expect(wrapper).toMatchSnapshot();
  });
});
