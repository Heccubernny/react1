import React from 'react';
import { shallow } from 'enzyme';
import MessageSender from './MessageSender';

describe('MessageSender', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<MessageSender />);
    expect(wrapper).toMatchSnapshot();
  });
});
