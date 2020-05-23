import React from 'react';
import NotFound from '../../components/NotFound';
import {shallow} from 'enzyme';

test('Should render Not Found Page', () => {
    const wrapper = shallow(< NotFound />);
    expect(wrapper).toMatchSnapshot();
    
});
