import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Login';
import { validateLogin } from '../utils/validation';

it.skip('simulate login failed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const emailEvent = {target: {name: 'email', value: 'test'}};
  const passwordEvent ={target: { name: 'password', value: 123}} ;
  wrapper.find('input[type="email"]').simulate('change', emailEvent);
  wrapper.find('input[type="password"]').simulate('change', passwordEvent);
  wrapper.find('input[type="submit"]').simulate('submit');
  expect(wrapper.state().message).toEqual({ type: 'ERROR', body: 'Wrong password or email' });
});

it.skip('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const emailEvent = {target: {name: 'email', value: 'test@email.com'}};
  const passwordEvent ={target: { name: 'password', value: 'TestTest123'}} ;
  wrapper.find('input[type="email"]').simulate('change', emailEvent);
  wrapper.find('input[type="password"]').simulate('change', passwordEvent);
  wrapper.find('input[type="submit"]').simulate('submit');
  expect(wrapper.state().message).toEqual({type: 'SUCCESS', body: 'Logged in'})
});

it('simulate login failed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const fakeState = {email: 'false', password: 123};
  wrapper.setState(fakeState);
  wrapper.find('input[type="submit"]').simulate('submit');
  expect(wrapper.state().message.type).toBe('ERROR');
});

it('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const fakeState = {email: 'test@email.com', password: 'TestTest123'};
  wrapper.setState(fakeState);
  wrapper.find('input[type="submit"]').simulate('submit');
  expect(wrapper.state().message.type).toBe('SUCCESS');
});

describe('should get values and set to states', ()=>{
  it('should set the email state', ()=>{
    const fakeLogin = jest.fn();
    const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'test@email.com'}});
    expect(wrapper.state().email).toBe('test@email.com');
  });
/*
  it('should set the password state', ()=>{
    const fakeLogin = jest.fn();
    const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'TestTest123'}});
    expect(wrapper.state().password).toBe('TestTest123');
  })
*/
});