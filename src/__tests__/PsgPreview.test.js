import React from 'react';
import { shallow } from 'enzyme';
import PsgPreview from '../components/PsgPreview';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PsgPreview employeeData clickPay clickAnother />);
});

describe('PsgPreview', () => {
  it('Should render preview', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render pay button', () => {
    wrapper.setProps({dbSubmitSuccess: false});
    expect(wrapper.find('.btn-post-login').hasClass('btn-pay')).toEqual(true);
  });

  /* it('should not render pay button', () => {
    wrapper.setProps({dbSubmitSuccess: true});
    expect(wrapper.find('.btn-post-login').hasClass('btn-addanother')).toEqual(false);
  }); */

  it('Should not render Pay button hence render Addanother button', () => {
    wrapper.setProps({dbSubmitSuccess: true});
    expect(wrapper.contains(<button className="btn-pay">Pay</button>)).toEqual(false);
  });

});