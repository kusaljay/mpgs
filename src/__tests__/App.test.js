import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe ('App', () => {
  it ('Should render App', () => {
    expect(wrapper).toMatchSnapshot();
  });

});