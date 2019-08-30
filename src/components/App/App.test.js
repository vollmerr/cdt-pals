import React from 'react';
import { shallow } from 'enzyme';

import Version from '../Version';

import App from './App';

const props = {};

let wrapper;
describe('App', () => {
  beforeEach(() => {
    wrapper = shallow(<App {...props} />);
  });

  it('should render the version', () => {
    expect(wrapper.find(Version).length).toBe(1);
  });
});
