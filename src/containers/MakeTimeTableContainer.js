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
			startDate : null,
			endDate : null,
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
	componentWillMount(){
        this.changeBodyColor();
    }

	componentDidMount(){

	}

	changeBodyColor(){
        document.getElementsByTagName('body')[0].className = 'body_color_skyblue_gradient';
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
		if(this.state.title && this.state.startDate && this.state.endDate){
			const timeTable = Object.assign({}, {
				title : this.state.title,
				time : this.state.timeCount,
				max : this.state.personCount,
				createdBy : localStorage.kaccount_email,
				start : this.state.startDate.format().split('T')[0],
				end : this.state.endDate.format().split('T')[0],
			});

			SaveTimeTable(timeTable)
			.then(response => {
				let shareUrl = window.location.href.replace('form', 'share') + `/${response.data.keyUrl}`;
				window.location.href = shareUrl;
			})
			.catch(error => console.log(error));
		}else{
			alert("데이터를 충분히 입력하세요!!");
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
					title='타임피커 만들기'
					content=''
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
