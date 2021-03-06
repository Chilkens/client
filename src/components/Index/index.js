import React, {PureComponent} from 'react';

import './style.css';

export default class Index extends PureComponent{

    render(){

        return(
                <section>
                    <div className="container">
                        <div className="image-bg-fluid-height marign_bottom_little">
                            <img className="img-responsive img-center" src="./images/logo_3x.png" alt=""/>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                    <img className='img-responsive img-center' src='./images/logo-txt.png' alt='TIME PICKER'/>
                                    <p className="lead section-lead text-center index_content">Time Picker는 가장 편하게 약속시간을<br />결정할 수 있게 도와줍니다.</p>
                            </div>
                        </div>
                    </div>
                </section>

        );
    }
}
