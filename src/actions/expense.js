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

export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});

export const removeExpense = ({uuid = ''}) => ({
        type: 'REMOVE_EXPENSE',
        uuid
});
