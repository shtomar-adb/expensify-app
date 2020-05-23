import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const expenseReducersDefaultState = [];
const filterReducerDefaultState = {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined
};

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
    id: uuid(),
    description, 
    note,
    amount,
    createdAt
    }
});

const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});

const removeExpense = ({uuid = ''}) => (
    {
        type: 'REMOVE_EXPENSE',
        uuid
    }
);

// const editFilter = ( update ) => ({
//   type: 'EDIT_FILTER',
//   update  
// });

const setTextFilter = (text) => ({
    type: 'SET_FILTER_TEXT',
    text
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expenseReducer = (state = expenseReducersDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(
                (element) => element.id !== action.uuid
            );
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if(action.id !== expense2.id){
                    return state;
                }
                else{
                    return {...expense, ...action.update};
                }
            });    
        default: return state;
    }
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_FILTER_TEXT':
            return {...state, text: action.text};
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SET_START_DATE':    
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':    
            return {...state, endDate: action.endDate};
        default: return state;
    }
};

const store = createStore(
    combineReducers({
        expense: expenseReducer,
        filter: filterReducer
    })
);

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

    return expenses.filter(
        (expense) => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; 
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
            return startDateMatch && endDateMatch && textMatch;
        }
    ).sort((expense1, expense2) => {
        //It could by sort by amount/or created data.
        if(sortBy === 'amount'){
            return expense1.amount < expense2.amount ? 1 : -1;
        } else if(sortBy === 'date'){
            return expense1.startDate > expense2.startDate ? -1 : 1;
        }
        return 0;
    });
};

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expense, state.filter);
    console.log(visibleExpense);
});

const expense1 = store.dispatch(addExpense({description:'Coffee Type1', amount:10, createdAt:200}));
const expense2 = store.dispatch(addExpense({description:'Coffee Type2', amount:1000, createdAt:100}));
// store.dispatch(removeExpense({uuid: expense2.expense.id}));
// store.dispatch(editExpense(expense1.id, { amount: 50 }));

store.dispatch(setTextFilter( 'Coffee'));
store.dispatch(setStartDate(0));
store.dispatch(setEndDate(1000));


// store.dispatch(sortByDate());



// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

console.log('-------------SORTING------------');
store.dispatch(sortByAmount()); //Coffee Type2, Coffee Type1
store.dispatch(sortByDate()); //Coffee Type1, Coffee Type2


// const person = {name:'firstName', age:'30'};
// console.log(person);
// console.log({title: 'Mr', ...person, lastName:'lastName', age:32});
