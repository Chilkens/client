import React, { PureComponent } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {IndexContainer, TimeListContainer} from './containers';
import {MakeTimeTableContainer, SelectTimeContainer} from './containers';
import {CommonTimeContainer, EnableTimeContainer} from './containers';
//import {FailListContainer} from './containers';
import {Share} from './components';

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
                </Route>
            </Router>
        );
    }
}

export default routes;
