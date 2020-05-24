import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expense';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();
store.dispatch(addExpense( {description: 'Water bill', amount: 100} ));
store.dispatch(addExpense( {description: 'Gas bill', amount: 200} ));
// store.dispatch(setTextFilter(''));
const state = store.getState();
console.log(state);


const visibleExpenses = getVisibleExpenses(state.expense, state.filter);
console.log(visibleExpenses);

setTimeout(
    () => {
        store.dispatch(setTextFilter('bill'));
    },3000
);

const jsx = (<Provider store={store}>
                <AppRouter/>
            </Provider>);

ReactDOM.render(jsx, document.getElementById('container')); 