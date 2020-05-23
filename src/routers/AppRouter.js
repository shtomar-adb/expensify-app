import React from 'react';
import {BrowserRouter, Route, Switch} from  'react-router-dom';
import Add from './../components/Add'
import Dashboard from './../components/Dashboard'
import Edit from './../components/Edit'
import Header from './../components/Header'
import Help from './../components/Help'
import NotFound from './../components/NotFound'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true}></Route>
                <Route path="/create" component={Add}></Route>
                <Route path="/edit" component={Edit}></Route>
                <Route path="/help" component={Help}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>    
);

export default AppRouter;