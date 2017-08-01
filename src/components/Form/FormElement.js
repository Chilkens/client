'use strict';

import React, { PureComponent } from 'react';

import './style.css';

class FormElement extends PureComponent{

	render() {
		return(
			<div>
				<div className="container flex-column">
					<form>
						<div className="form-group">
							<label>모임 임원</label>
							<div className="container-fluid row">
								<input type="text" className="form-control w-50" placeholder="choose"></input>
								<span className="input-group-btn offset-3">
								<button className="btn btn-default btn-info "><span className="glyphicon glyphicon-minus"></span></button>
								</span>
								<span className="input-group-btn">
								<button className="btn btn-default btn-info"><span className="glyphicon glyphicon-plus"></span></button>
								</span>
							</div>
						</div>
						<div className="form-group">
							<label>모임 시간</label>
							<div className="container-fluid row">
								<input type="text" className="form-control w-50" placeholder="choose"></input>
								<span className="input-group-btn offset-3">
								<button className="btn btn-default btn-info "><span className="glyphicon glyphicon-minus"></span></button>
								</span>
								<span className="input-group-btn">
								<button className="btn btn-default btn-info"><span className="glyphicon glyphicon-plus"></span></button>
								</span>
							</div>
						</div>
						<div className="form-group">
							<div className="container-fluid row">
								<label>타임테이블 기간</label>
								<span className="input-group-btn offset-6">
								<button className="btn btn-custom">수정</button>
								</span>
							</div>
							<input type="text" className="form-control w-75" placeholder="choose">
							</input>
						</div>

					</form>


				</div>
				<button style={{borderRadius:0}} className="btn btn-default w-100">공유하기</button>
				</div>
		);
	}
}

export default FormElement;
