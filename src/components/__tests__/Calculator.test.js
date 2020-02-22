import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../Calculator';

describe('Calculator', () => {
  const props = {};

  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('render', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    it('should set the first operand', () => {
      wrapper.find('#operand6').first().simulate('click');

      expect(wrapper.find('#screen').text()).toBe('6');
    });

    it('should not change operand when 0 is pressed twice or more', () => {
      wrapper.find('#operand0').first().simulate('click');
      wrapper.find('#operand0').first().simulate('click');

      expect(wrapper.find('#screen').text()).toBe('0');
    });

    it('should set the first operand second digit', () => {
      wrapper.find('#operand6').first().simulate('click');
      wrapper.find('#operand7').first().simulate('click');

      expect(wrapper.find('#screen').text()).toBe('67');
    });

    it('should set the first operand third digit', () => {
      wrapper.find('#operand6').first().simulate('click');
      wrapper.find('#operand7').first().simulate('click');
      wrapper.find('#operand0').first().simulate('click');

      expect(wrapper.find('#screen').text()).toBe('670');
    });

    it('should set the first three digit on the screen after equal selected', () => {
      wrapper.find('#operand1').first().simulate('click');
      wrapper.find('#operand5').first().simulate('click');
      wrapper.find('#operand2').first().simulate('click');
      wrapper.find('#operatorEqual').first().simulate('click');
      wrapper.find('#operand0').first().simulate('click');

      expect(wrapper.find('#screen').text()).toBe('1520');
    });

    it('should set the second operator on the screen after addition selected', () => {
      wrapper.find('#operand1').first().simulate('click');
      wrapper.find('#operand5').first().simulate('click');
      wrapper.find('#operand2').first().simulate('click');
      wrapper.find('#operatorAddition').first().simulate('click');
      wrapper.find('#operand1').first().simulate('click');
      wrapper.find('#operand0').first().simulate('click');

      expect(wrapper.find('#screen').text()).toBe('10');
    });

    it('should set the second operator on the screen after equal selected', () => {
      wrapper.find('#operand1').first().simulate('click');
      wrapper.find('#operand5').first().simulate('click');
      wrapper.find('#operand2').first().simulate('click');
      wrapper.find('#operatorAddition').first().simulate('click');
      wrapper.find('#operand1').first().simulate('click');
      wrapper.find('#operand0').first().simulate('click');
      wrapper.find('#operatorEqual').first().simulate('click');

      expect(wrapper.find('#screen').text()).toBe('162');
    });

    it('should do multiple operation in a row', () => {
        wrapper.find('#operand9').first().simulate('click');
        wrapper.find('#operatorMultiplication').first().simulate('click');
        wrapper.find('#operand4').first().simulate('click');
        wrapper.find('#operatorDivision').first().simulate('click');
        wrapper.find('#operand3').first().simulate('click');
        wrapper.find('#operatorSubtraction').first().simulate('click');
        wrapper.find('#operand8').first().simulate('click');
        wrapper.find('#operatorEqual').first().simulate('click');
  
        expect(wrapper.find('#screen').text()).toBe('4');
      });

      it('should cancel the value', () => {
        wrapper.find('#operand9').first().simulate('click');
        wrapper.find('#operand4').first().simulate('click');
        wrapper.find('#operatorCancel').first().simulate('click');
  
        expect(wrapper.find('#screen').text()).toBe('0');
      });
  });
});
