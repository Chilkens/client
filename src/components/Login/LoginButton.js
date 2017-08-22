import React, {PureComponent} from 'react';
import {Link} from 'react-router';

export default class LoginButton extends PureComponent{

    render(){

        return(
            <footer>
                <div className="navbar-fixed-bottom">
                    <a id='kakao-login-btn'></a>
                </div>
             </footer>
        );
    }
}
