import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from './../actions/expense';

const Edit = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={
                    (expense) => {
                        props.dispatch(editExpense(props.expense.id, expense));
                        props.history.push('/');
                    }}/>

                    <button onClick={
                        (e) => {
                            props.dispatch(removeExpense({uuid: props.expense.id}));
                            props.history.push('/');
                        }
                    }>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    var arr = props.location.pathname.split("/");
    return {
        expense: state.expense.find((expense) => expense.id === arr[arr.length - 1] )
    };
};

export default connect(mapStateToProps)(Edit);