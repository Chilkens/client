import React, { Component } from 'react';
import { Title, FormElement, FormTitle } from '../components';

class MakeTimeTableContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<Title
					title='타임테이블 만들기'
					content='Time Picker로 약속시간을 편하게 정해보세요'
				/>
				<FormTitle
							title='타임테이블 이름'/>
				<FormElement />
			</div>
		);
	}
}

export default MakeTimeTableContainer;
