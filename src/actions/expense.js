import uuid from 'uuid';
import database from './../firebase/firebase';
// Expense related action generator.
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = {description, note, amount, createdAt};
        return database.ref('expense').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//Edit expense
export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});

export const startEditExpense = ({ id, updates }) => {
    return (dispatch) => {
        return database.ref(`expense/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

//Remove Expense
export const removeExpense = ({id}) => ({
        type: 'REMOVE_EXPENSE',
        id
});

export const startRemoveExpense = ({ id }) => {
    return (dispatch) => {
        return database.ref(`expense/${id}`).remove.then(() => {
            dispatch(removeExpense({id}));
        });
    };
};

//Set expense
export const setExpense = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpense = () => {
    console.log('startSetExpense');
    return (dispatch) => {
        return database.ref('expense').once('value').then((snapshot) => {
            const expenses = [];
            
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpense(expenses));
        });
    };
};

