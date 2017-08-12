import React, { PureComponent } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {IndexContainer, TimeListContainer} from './containers';
import {MakeTimeTableContainer, SelectTimeContainer} from './containers';
import {Login, Index} from './components';

import 'bootstrap/dist/css/bootstrap.css';


class routes extends PureComponent{

    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/'>
                    <IndexRoute component={Index} />
                    <Route path='list' component={TimeListContainer} />
                    <Route path='form' component={MakeTimeTableContainer} />
                    <Route path='login' component={Login} />
                    <Route path='select/:id' component={SelectTimeContainer} />
                </Route>
            </Router>
            //route login and indexroutes must be changed
        );
    }
}

export default routes;
