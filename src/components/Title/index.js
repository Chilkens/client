import React, {PureComponent} from 'react';

import './style.css';

export default class Title extends PureComponent{

    render(){

        return(
            <div className='jumbotron jumbotron-fluid'>
                <div className='container'>
                    <h1 className='title'>{this.props.title}</h1>
                    <p className='title_content'>{this.props.content}</p>
                </div>
            </div>
        );
    }
}
