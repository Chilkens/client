import React, {PureComponent} from 'react';

export default class TimeItem extends PureComponent{

    render(){

        return(

            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <small className='pull-right'>진행중</small>
                    <h4 className="mb-1">{this.props.title}</h4>
                </div>
                <p className="mb-1">{this.props.period}</p>
                <small>{this.props.member}</small>
            </a>
        );
    }
}
