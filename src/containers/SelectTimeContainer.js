import React, { Component } from 'react';
import { Title, TimeSelect } from '../components';

class SelectTimeContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<Title
					title='가능시간 선택'
					content=''
				/>

				<TimeSelect />

			</div>
		);
	}
}

export default SelectTimeContainer;
