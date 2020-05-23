import React from 'react';
import dataSample from '../fixtures/expense';
import ExpenseListItem from '../../components/ExpenseListItem';
import {shallow} from 'enzyme';

test('Should render expense list item', () => {
    const warpper = shallow(< ExpenseListItem  {...dataSample[0]} />);
    expect(warpper).toMatchSnapshot();
    
});
