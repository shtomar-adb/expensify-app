import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
   startAddExpense,
   addExpense,
   editExpense,
   removeExpense, 
   setExpense,
   startSetExpense,
   startRemoveExpense,
   startEditExpense
} from '../../actions/expense';
import dummyData from '../fixtures/expense';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = "thisistestuis";
const defaultAuthStore = {
    auth: {
        uid
    }
};

beforeEach((done) => {
    const expensesData = {};
    dummyData.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt};
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('Should set up removeExpense', () => {
    const action = removeExpense({id: '123456'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123456'
    });
});

test('Should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthStore);
    const id = dummyData[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('Test Start Edit expense', (done) => {
    const store = createMockStore(defaultAuthStore);
    const id = dummyData[0].id;
    const update = { amount: 100 };
    store.dispatch(startEditExpense(id, update)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            update
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(update.amount);
        done();
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
    const store = createMockStore(defaultAuthStore);
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Add expense to database store with default data', (done) => {
    const store = createMockStore(defaultAuthStore);
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Test setExpense with some data.', () => {
    const action = setExpense(dummyData);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: dummyData
    });
});

test('Should fetch expensed from firebase', (done) => {
    const store = createMockStore(defaultAuthStore);
    store.dispatch(startSetExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: dummyData
        });
        done();
    });

});



