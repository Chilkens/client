'use strict';

import React, {PureComponent} from 'react';

class TimeTableItem extends PureComponent{

    render(){

        return(
            /*
            <div>
                <div className='col-md-3 flex-column align-items-start'>
                    <div className="d-flex w-100 justify-content-between">
                        <h4 className='pull-right'>진행중</h4>
                        <h3>췰킨스 팀모임 1차</h3>
                    </div>
                    <div>
                        <p>7월 20일(수) ~ 7월 26일(화)</p>
                    </div>
                    <hr className='my-4' />
                </div>
                <div className='col-md-3 flex-column align-items-start'>
                    <div className="d-flex w-100 justify-content-between">
                        <h4 className='pull-right'>진행중</h4>
                        <h3>췰킨스 팀모임 1차</h3>
                    </div>
                    <div>
                        <p>7월 20일(수) ~ 7월 26일(화)</p>
                    </div>
                    <hr className='my-4' />
                </div>
                <div className='col-md-3 flex-column align-items-start'>
                    <div className="d-flex w-100 justify-content-between">
                        <h4 className='pull-right'>진행중</h4>
                        <h3>췰킨스 팀모임 1차</h3>
                    </div>
                    <div>
                        <p>7월 20일(수) ~ 7월 26일(화)</p>
                    </div>
                    <hr className='my-4' />
                </div>
                <div className='col-md-3 flex-column align-items-start'>
                    <div className="d-flex w-100 justify-content-between">
                        <h4 className='pull-right'>진행중</h4>
                        <h3>췰킨스 팀모임 1차</h3>
                    </div>
                    <div>
                        <p>7월 20일(수) ~ 7월 26일(화)</p>
                    </div>
                    <hr className='my-4' />
                </div>
            </div>
            */
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <small className='pull-right'>진행중</small>
                        <h4 className="mb-1">칠킨스 팀모임 1 차</h4>
                    </div>
                    <p className="mb-1">Yo 요즘 대세는 칠킨스 아닙니까아</p>
                    <small>호동</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <small className='pull-right'>3 일전</small>
                        <h4 className="mb-1">3 일전 끝난 모임</h4>
                    </div>
                    <p className="mb-1">별거 없었습니다...</p>
                    <small className="text-muted">Nuckle Flow</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <small className='pull-right'>3 days ago</small>
                        <h4 className="mb-1">List group item heading</h4>
                    </div>
                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small className="text-muted">Donec id elit non mi porta.</small>
                </a>
            </div>
            
        );
    }
}

export default TimeTableItem;
