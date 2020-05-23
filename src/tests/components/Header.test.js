import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly - Snapshot', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render Header correctly - Using elements', () => {

    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1').text()).toBe('Expensify');
});