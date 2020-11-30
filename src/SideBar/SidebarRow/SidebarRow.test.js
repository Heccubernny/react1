import React from 'react';
import { shallow } from 'enzyme';
import SidebarRow from './SidebarRow';

describe('SidebarRow', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<SidebarRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
