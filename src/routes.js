import React, { PureComponent } from 'react';
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router';

import {IndexContainer, TimeListContainer} from './containers';
import {MakeTimeTableContainer, SelectTimeContainer} from './containers';
import {CommonTimeContainer, EnableTimeContainer} from './containers';
//import {FailListContainer} from './containers';
import {Share, NotFound} from './components';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

class routes extends PureComponent{

    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/'>
                    <IndexRoute component={IndexContainer} />
                    <Route path='list' component={TimeListContainer} />
                    <Route path='form' component={MakeTimeTableContainer} />
                    <Route path='select/:id' component={SelectTimeContainer} />
                    <Route path='share/:id' component={Share} />
                    <Route path='common/:id' component={CommonTimeContainer} />
                    <Route path='enable/:id' component={EnableTimeContainer} />
                    <Route path='/404' component={NotFound} />
                    <Redirect from='*' to='/404' />
                </Route>
            </Router>
        );
    }
}

export default routes;
