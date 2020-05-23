import expensesreduces from '../../reducers/expense';
import dataSample from '../fixtures/expense';

test('Test Default Value', () => {
    expect(expensesreduces(undefined, {type:'@@INIT'})).toEqual([]);
});

test('Test Add Expense', () => {
    expect(expensesreduces(undefined, {type:'ADD_EXPENSE', expense:dataSample[0]})).toEqual([dataSample[0]]);
});

test('Test Edit Expense SUCCESS', () => {
    expect(expensesreduces([dataSample[0]], {type:'EDIT_EXPENSE', id:'1', update: {description:'Sports'}})).toEqual([{
        id: '1',
        description: 'Sports',   
        note: 'This is a rent expense.',
        amount: 100,
        createdAt: 0
       }]);
});

test('Test Edit Expense FAILURE', () => {
    expect(expensesreduces([dataSample[0]], {type:'EDIT_EXPENSE', id:'99', update: {description:'Sports'}})).toEqual([{
        id: '1',
        description: 'Rent',   
        note: 'This is a rent expense.',
        amount: 100,
        createdAt: 0
       }]);
});

test('Test Remve Expense', () => {
    expect(expensesreduces(dataSample, {type:'REMOVE_EXPENSE', uuid:'3'})).toEqual([dataSample[0],dataSample[1]]);
});