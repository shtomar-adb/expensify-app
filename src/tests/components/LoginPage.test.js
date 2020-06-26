import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/Login';
import { startLogin } from '../../actions/auth';

test('should correctly render login page', () => {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogIn on button click', () => {
    const startLogIn = jest.fn();
    const wrapper = shallow(<LoginPage startLogIn={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})