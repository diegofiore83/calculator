import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('App', () => {
  const props = {};

  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<App />);
  });

  describe('render', () => {
      it('should render correctly', () => {
          expect(wrapper).toMatchSnapshot();
      });
  });
});
