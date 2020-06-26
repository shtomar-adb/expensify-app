import React from 'react';
import {Router, Route, Switch} from  'react-router-dom';
import {createBrowserHistory} from 'history';
import Add from './../components/Add'
import Dashboard from './../components/Dashboard'
import Edit from './../components/Edit'
import NotFound from './../components/NotFound'
import LoginPage from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/create" component={Add} />
                <PrivateRoute path="/edit" component={Edit} />
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    </Router>    
);

export default AppRouter;