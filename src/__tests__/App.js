import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

it('should render <App /> without user', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().user).not.toBeDefined();
});

it('should render <App /> with user', () => {
    const wrapper = mount(<App />);
    const user = "fake name";
    wrapper.setState({user});
    expect(wrapper.find('button').text()).toBe(user);
});

it('call the internal method loginSuccessful', () => {
    const wrapper = shallow(<App />);
    const email = "test@email.com";
    wrapper.instance().loginSuccessful(email);
    expect(wrapper.state().user).toBe(email);
});

it('call the internal method logout', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logout();
    expect(wrapper.state().user).toBe('');
});