import React, { PureComponent } from 'react';

export default class ListItem extends PureComponent{

    render(){
        return(

            <a href="" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <small className='pull-right item_condition'>진행중</small>
                    <h4 className="mb-1 item_header">{this.props.title}</h4>
                </div>
                <small className='pull-right'>{this.props.confirmCount.current}/{this.props.confirmCount.max}</small>
                <p className="mb-1 item_content">{this.props.period}</p>
                <small className='item_member'>{this.props.member}</small>
            </a>
        );
    }
}
