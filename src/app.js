import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpense } from './actions/expense';
// import { addExpense } from './actions/expense';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import {login, logout} from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';


const store = configureStore();
// store.dispatch(addExpense( {description: 'Water bill', amount: 100} ));
// store.dispatch(addExpense( {description: 'Gas bill', amount: 200} ));
// store.dispatch(setTextFilter(''));
// const state = store.getState();
// console.log(state);


// const visibleExpenses = getVisibleExpenses(state.expense, state.filter);
// console.log(visibleExpenses);

// setTimeout(
//     () => {
//         store.dispatch(setTextFilter('bill'));
//     },3000
// );

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('container')); 
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('container')); 

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpense()).then(() => {
            renderApp();
        });
        if(history.location.pathname === '/'){
            history.push('/dashboard');
        }
    }
    else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
