import React, { Component } from 'react';
import { Title, FormElement, FormTitle } from '../components';

class MakeTimeTableContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title : '',
			personCount : 3,
			timeCount : 3,
			period : '7월 20일(수) ~ 7월 26일(화)'
		};

		this.AddPersonCount = this.AddPersonCount.bind(this);
		this.MinusPersonCount = this.MinusPersonCount.bind(this);
		this.AddTimeCount = this.AddTimeCount.bind(this);
		this.MinusTimeCount = this.MinusTimeCount.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount(){
		
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
		const TimeTable = Object.assign({}, this.state);
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
				/>
			</div>
		);
	}
}

export default MakeTimeTableContainer;
