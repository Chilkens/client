import React, { PureComponent } from 'react';


export default class EnableTime extends PureComponent {

    render() {

        let yearMonthDay = this.props.intersection.date.split('-');
        let time = this.props.intersection.time;
        let enableTime = yearMonthDay[0] + '년 ' + yearMonthDay[1] + '월 ' + yearMonthDay[2] + '일 ';
        enableTime += time[0] + ':00 ~ ' + time[this.props.intersection.time.length-1] + ':00';

        return(
            <div>
                <a href="" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <small className='pull-right'>완료</small>
                        <h4 className="mb-1">{this.props.title.slice(0, 22)}</h4>
                    </div>
                    <p className="mb-1">{enableTime}</p>
                    <small></small>
                </a>
            </div>
        );
    }
}
