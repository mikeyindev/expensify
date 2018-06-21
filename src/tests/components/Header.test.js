import React from 'react';
// Use shallow rendering when you don't need user interaction or lifecycle
// events
import { shallow } from 'enzyme';
// No need to import toJSON, the JSON serializer is configured in
// jest.config.json 
// import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }} />);
  // expect(wrapper.find('h1').text()).toBe('Expensify');

  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});