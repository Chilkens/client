import React, { PureComponent } from 'react';

import './style.css';

class FormElement extends PureComponent{

	render() {
		return(
			<div>
				<div className='col-md-3 flex-column align-items-start'>
					<h5>모임 인원</h5>
						<div className="d-flex w-100 justify-content-between">
								<button onClick={this.props.AddPersonCount} className='btn btn-info pull-right form-btn plus'>+</button>
								<button onClick={this.props.MinusPersonCount} className='btn btn-info pull-right form-btn minus'>-</button>
								<h2 className="form-gray-text">{this.props.personCount}</h2>
						</div>
				</div>
				<br />
				<div className='col-md-3 flex-column align-items-start'>
					<h5>모임 시간</h5>
						<div className="d-flex w-100 justify-content-between">
								<button onClick={this.props.AddTimeCount} className='btn btn-info pull-right form-btn plus'>+</button>
								<button onClick={this.props.MinusTimeCount} className='btn btn-info pull-right form-btn minus'>-</button>
								<h2 className="form-gray-text">{this.props.timeCount}</h2>
						</div>
				</div>

				<br />
				<div className='col-md-3 flex-column align-items-start'>
					<button className='btn btn-default pull-right edit-btn'>수정</button>
					<h5>타임테이블 기간</h5>
					<div className="d-flex w-100 justify-content-between">
							<h5 className="form-gray-text">{this.props.period}</h5>
					</div>
				</div>
				<br />
				<button className="btn btn-default btn-block btn-gray" onClick={this.props.onSubmit}>공유하기</button>
			</div>
		);
	}
}


export default FormElement;
