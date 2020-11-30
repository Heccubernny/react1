import React from 'react';
import { shallow } from 'enzyme';
import Feed from './Feed';

describe('Feed', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Feed />);
    expect(wrapper).toMatchSnapshot();
  });
});
