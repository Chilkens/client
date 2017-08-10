import React, {PureComponent} from 'react';

import {Link} from 'react-router';

import './style.css';

export default class Index extends PureComponent{

    render(){

        return(
            <div>
                <section>
                    <div className="container">
                        <div className="image-bg-fluid-height">
                            <img className="img-responsive img-center" src="http://placehold.it/200x150&text=Logo" alt=""/>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="section-heading text-center">Time Picker</h1>
                                <p className="lead section-lead text-center">Time Picker는 가장 편하게 약속시간을<br />결정할 수 있게 도와줍니다.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                   <div className="navbar-fixed-bottom">
                        <Link to ='/list'><h1 className="section-heading text-center">카카오톡 아이디로 로그인</h1></Link>
                   </div>
                 </footer>
            </div>
        );
    }
}