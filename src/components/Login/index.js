import React, {PureComponent} from 'react';
import {Link} from 'react-router';

class Login extends PureComponent{

    render(){
        let containerStyle = {
            'marginTop' : '50px',
        }
        return(

            <div className="container" style={containerStyle}>
                 <div className="row">
                     <div className="col-md-4 col-md-offset-4">
                         <div className="login-panel panel panel-default">
                             <div className="panel-heading">
                                 <h3 className="panel-title">접속해 주세요</h3>
                             </div>
                             <div className="panel-body">
                                 <form>
                                     <fieldset>
                                         <div className="form-group">
                                             <input className="form-control" placeholder="E-mail" name="email" type="email" autoFocus />
                                         </div>
                                         <div className="form-group">
                                             <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                                         </div>
                                         <div className="checkbox">
                                             <label>
                                                 <input name="remember" type="checkbox" value="Remember Me" />비밀번호 기억하기
                                             </label>
                                         </div>
                                         <Link to='/list' className="btn btn-lg btn-success btn-block">Join</Link>
                                     </fieldset>
                                 </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

        );
    }
}

export default Login;
