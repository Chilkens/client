import React, { Component } from 'react';
import { Title, FormElement, FormTitle } from '../components';
import {SaveTimeTable} from '../lib/toServer';
import { START_DATE, END_DATE } from 'react-dates/constants';
import moment from 'moment';

class MakeTimeTableContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			title : '',
			personCount : 3,
			timeCount : 3,
			period : '7월 20일(수) ~ 7월 26일(화)',
			startDate: null,
			endDate: null
		};

		this.AddPersonCount = this.AddPersonCount.bind(this);
		this.MinusPersonCount = this.MinusPersonCount.bind(this);
		this.AddTimeCount = this.AddTimeCount.bind(this);
		this.MinusTimeCount = this.MinusTimeCount.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onDatesChange = this.onDatesChange.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
		this.isDayBlocked = this.isDayBlocked.bind(this);
	}

	onChange(e){

		e.preventDefault();
		this.setState({
			title : e.target.value,
		});

	}

	AddPersonCount() {
		const personCount = this.state.personCount + 1 > 9 ? (9) : (this.state.personCount + 1);
		this.setState({
			personCount,
		});
	}

	MinusPersonCount() {
		const personCount = this.state.personCount - 1 < 2 ? (2) : (this.state.personCount - 1);
		this.setState({
			personCount,
		});
	}

	AddTimeCount() {
		const timeCount = this.state.timeCount + 1 > 9 ? (9) : (this.state.timeCount + 1);
		this.setState({
			timeCount,
		});
	}

	MinusTimeCount() {
		const timeCount = this.state.timeCount - 1 < 1 ? (1) : (this.state.timeCount - 1);
		this.setState({
			timeCount,
		});
	}

	onSubmit(e){

		e.preventDefault();
		if(this.state.title){
			const timeTable = Object.assign({}, {
				title : this.state.title,
				time : this.state.timeCount,
				max : this.state.personCount,
				createdBy : '장호동',
				start : '2017-08-03',
				end : '2017-08-09',
			});

			SaveTimeTable(timeTable)
			.then(response => console.log(response.data))
			.catch(error => console.log(error));
		}else{
			console.log("제목을 입력하세요");
		}

	}

	onDatesChange({ startDate, endDate }) {
		this.setState({ startDate, endDate });
	}

	onFocusChange(focusedInput) {
		this.setState({ focusedInput });
	}

	isDayBlocked(startDate) {
		startDate.isAfter(moment().add(6, 'days'));
	}

	render() {
		return(
			<div>
				<Title
					title='타임테이블 만들기'
					content='Time Picker로 약속시간을 편하게 정해보세요'
				/>
				<FormTitle
					title='타임테이블 이름'
					onChange={this.onChange}
				/>
				<FormElement
					AddPersonCount={this.AddPersonCount}
					MinusPersonCount={this.MinusPersonCount}
					AddTimeCount={this.AddTimeCount}
					MinusTimeCount={this.MinusTimeCount}
					personCount={this.state.personCount}
					timeCount={this.state.timeCount}
					period={this.state.period}
					onSubmit={this.onSubmit}
					startDate={this.state.startDate}
					endDate={this.state.endDate}
					focusedInput={this.state.focusedInput}
					dateChange={this.onDatesChange}
					focusChange={this.onFocusChange}
					isDayBlocked={this.isDayBlocked}
				/>
			</div>
		);
	}
}

export default MakeTimeTableContainer;
