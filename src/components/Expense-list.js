import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from './../selectors/expenses';

const ExpenseList = (prop) => (
    <div>
        <p>Total Expense: {prop.expenses.length} </p>
        {prop.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense}/>)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpense(state.expense, state.filter)
    };
};

export default connect(mapStateToProps)(ExpenseList);
