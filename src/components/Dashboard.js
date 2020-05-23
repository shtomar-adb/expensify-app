import React from 'react';
import ExpenseList from './Expense-list';
import ExpenseListFilter from './ExpenseListFilter';
const Dashboard = () => (
    <div>
        Dashboard
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default Dashboard;