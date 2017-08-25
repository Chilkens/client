import React, { PureComponent } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {IndexContainer, TimeListContainer} from './containers';
import {MakeTimeTableContainer, SelectTimeContainer} from './containers';
import {Login, Index} from './components';

import {FailListContainer} from './containers';
import {Share} from './components';
import {ConfirmTimeContainer} from './containers';

import 'bootstrap/dist/css/bootstrap.css';


class routes extends PureComponent{

    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/'>
                    <IndexRoute component={IndexContainer} />
                    <Route path='list' component={TimeListContainer} />
                    <Route path='form' component={MakeTimeTableContainer} />
                    <Route path='select/:id' component={SelectTimeContainer} />
                    <Route path='fail' component={FailListContainer} />
                    <Route path='share' component={Share} />
                    <Route path='confirm' component={ConfirmTimeContainer} />
                </Route>
            </Router>
            //route login and indexroutes must be changed
        );
    }
}

export default routes;
