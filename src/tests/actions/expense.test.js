import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
   startAddExpense,
   addExpense,
   editExpense,
   removeExpense 
} from '../../actions/expense';
import dummyData from '../fixtures/expense';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(dummyData[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: dummyData[2]
       }
    ); 
});

test('Test Add expense to database and store with data', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'Faster speed mouse',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expense/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Add expense to database store with default data', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expense/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});



// test("Test Add expense with default values",
// () => {
//     const action = addExpense();
//     expect(action).toEqual(
//         {
//             type: 'ADD_EXPENSE',
//             expense: {
//             id:expect.any(String),
//             description : '', 
//             note : '', 
//             amount : 0, 
//             createdAt : 0
//             }
//         }
//     );
// }
// );