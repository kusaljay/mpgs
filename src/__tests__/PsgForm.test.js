import React from 'react';
import { shallow } from 'enzyme';
import PsgForm from '../components/PsgForm';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PsgForm inputChanged submitGenerate errors />);
});

describe('PsgForm', () => {
  it('Should render form', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should validate when the button is clicked', () => {
    wrapper.find('button').simulate('click');
    wrapper.setProps({errors: true});
    expect(wrapper.find('.form-alerts')).toHaveLength(1);
  });
});