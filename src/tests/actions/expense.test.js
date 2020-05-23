import { 
   addExpense,
   editExpense,
   removeExpense 
} from '../../actions/expense';

test('Should set up removeExpense', () => {
    const action = removeExpense({uuid: '123456'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        uuid: '123456'
    });
});

test('Test Edit Expense Action',() => {
    const action = editExpense(
        '123',{note: 'New note value'}
    );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123',
        update: {
            note: 'New note value'
        }
    });
});

test('Add expense with data', () => {
    const action = addExpense(
        {
            description:'Rent',
            note:'Last Month Rent',
            amount:'2100',
            createdAt:'100000'
        }
    );

   expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description:'Rent',
            note:'Last Month Rent',
            amount:'2100',
            createdAt:'100000'
        }
       }
   ); 
});

test("Test Add expense with default values",
() => {
    const action = addExpense();
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
            id:expect.any(String),
            description : '', 
            note : '', 
            amount : 0, 
            createdAt : 0
            }
        }
    );
}
);