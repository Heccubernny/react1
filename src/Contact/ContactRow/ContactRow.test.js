import React from 'react';
import { shallow } from 'enzyme';
import ContactRow from './ContactRow';

describe('ContactRow', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ContactRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
