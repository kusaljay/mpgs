import React from 'react';
import { shallow } from 'enzyme';
import PsgHome from '../components/PsgHome';
import PsgForm from '../components/PsgForm';
import PsgPreview from '../components/PsgPreview';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PsgHome />);
});

describe ('PsgHome', () => {
  it ('Should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it ('Should render form', () => {
    wrapper.setProps({showPreview: false});
    expect(wrapper.find(PsgForm)).toHaveLength(1);
  });

  /* it ('Should render preview', () => {
    wrapper.setProps({showPreview: true});
    expect(wrapper.find(PsgPreview)).toHaveLength(1);
  }); */

});