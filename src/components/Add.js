import React from 'react';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expense';
import ExpenseForm from './ExpenseForm';

const Add = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(startAddExpense(expense));
            props.history.push('/');
        }}/>
    </div>
);

export default connect()(Add);