import React from 'react';
import { shallow } from 'enzyme';
import Story from './Story';

describe('Story', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Story />);
    expect(wrapper).toMatchSnapshot();
  });
});
