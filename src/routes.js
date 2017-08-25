import React, { PureComponent } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {IndexContainer, TimeListContainer} from './containers';
import {MakeTimeTableContainer, SelectTimeContainer} from './containers';
import {Share} from './components';

import {EnableTimeContainer} from './containers';
import {CommonTimeContainer} from './containers';

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
                    <Route path='enabletime' component={EnableTimeContainer} />
                    <Route path='share' component={Share} />
                    <Route path='common' component={CommonTimeContainer} />

                </Route>
            </Router>
            //route login and indexroutes must be changed
        );
    }
}

export default routes;
