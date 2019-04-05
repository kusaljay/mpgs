import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/Login';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Login />);
});

describe ('Login', () => {
  it ('Should render login', () => {
    expect(wrapper).toMatchSnapshot();
  });

});