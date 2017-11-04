import React, {PureComponent} from 'react';
import {Link} from 'react-router';

import './style.css';

export default class TimeItem extends PureComponent{

    render(){

        let selectUrl = `${this.props.url}/${this.props.keyUrl}`;

        return(

            <Link href={selectUrl} className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <small className='pull-right item_condition'>진행중</small>
                    <h4 className="mb-1 item_header">{this.props.title}</h4>
                </div>
                <p className="mb-1 item_content">{this.props.period}</p>
                <small className='item_member'>{this.props.member}</small>
            </Link>
        );
    }
}
