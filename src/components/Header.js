import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ( props ) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active">Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={props.startLogOut}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);

