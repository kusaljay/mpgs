import React from 'react';
import { shallow } from 'enzyme';
import PsgHeader from '../components/templates/PsgHeader';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PsgHeader />);
});

describe ('PsgHeader', () => {
  it ('Should render header', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

