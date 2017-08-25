import React, { PureComponent } from 'react';
import SecondList from './SecondList';

export default class EnableTime extends PureComponent {

    render() {

        let yearMonthDay = this.props.intersection.date.split('-');
        let time = this.props.intersection.time;
        let enableTime = yearMonthDay[0] + '년 ' + yearMonthDay[1] + '월 ' + yearMonthDay[2] + '일 ';
        enableTime += time[0] + ':00 ~ ' + time[this.props.intersection.time.length-1] + ':00';

        return(
            <div>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <small className='pull-right'>완료</small>
                        <h4 className="mb-1">제애모옥 잠시 보류</h4>
                    </div>
                    <p className="mb-1">{enableTime}</p>
                    <small>샘플1 샘플2 샘플3</small>
                </a>
            </div>
        );
    }
}
