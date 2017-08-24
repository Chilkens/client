import React, { PureComponent } from 'react';
import { DateRangePicker } from 'react-dates';
import { END_DATE } from 'react-dates/constants';
import { Link } from 'react-router';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';


class FormElement extends PureComponent{
	constructor(props) {
		super(props);
	}

	render() {
		const maximumNights = 6;
		let isOutsideRange;
		if(this.props.startDate) {
			isOutsideRange = day => (
				this.props.focusedInput === END_DATE && (day.isBefore(this.props.startDate) || day.isAfter(this.props.startDate.clone().add(maximumNights, 'days')))
			);
		}

		return(
			<div>
				<div className="row-fluid">
					<div className='col-lg-12'>
						<h5 className="white-letter">모임 인원</h5>
						<button onClick={this.props.AddPersonCount} className='btn btn-info pull-right form-btn plus'>+</button>
						<button onClick={this.props.MinusPersonCount} className='btn btn-info pull-right form-btn minus'>-</button>
						<h2 className="white-letter">{this.props.personCount} 명</h2>
					</div>
				</div>
				<div className="row-fluid">
					<br />
					<div className='col-lg-12'>
						<h5 className="white-letter">모임 시간</h5>
						<button onClick={this.props.AddTimeCount} className='btn btn-info pull-right form-btn plus'>+</button>
						<button onClick={this.props.MinusTimeCount} className='btn btn-info pull-right form-btn minus'>-</button>
						<h2 className="white-letter">{this.props.timeCount} 시간</h2>
					</div>
				</div>

					<br />
				<div className="container">

						<h5 className="white-letter">타임테이블 기간</h5>
						<div className="col-sm-3">
							<DateRangePicker
								startDate={this.props.startDate}
								endDate={this.props.endDate}
								onDatesChange={this.props.dateChange}
								focusedInput={this.props.focusedInput}
								onFocusChange={this.props.focusChange}
								isDayBlocked={this.props.isDayBlocked}
								startDateId="start"
								endDateId="end"
								startDatePlaceholderText="시작"
								endDatePlaceholderText="끝"
								isOutsideRange = {isOutsideRange}
								numberOfMonths = {1}
							/>
						</div>
					<br />
				</div>
				<footer>
					 <div className="navbar-fixed-bottom">
								<Link to ='#'><h1 className="section-heading text-center btn-bottom">공유하기</h1></Link>
					 </div>
				 </footer>

			</div>

		);
	}
}


export default FormElement;
