import React from 'react';
import { shallow } from 'enzyme';
import StoryReel from './StoryReel';

describe('StoryReel', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<StoryReel />);
    expect(wrapper).toMatchSnapshot();
  });
});
