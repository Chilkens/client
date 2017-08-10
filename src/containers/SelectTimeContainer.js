import React, { Component } from 'react';
import { Title, TimeSelect } from '../components';

const time = [{'time':9}, {'time':10},	{'time':11}, {'time': 12}, {'time':13}, {'time':14},
 							{'time': 15}, {'time': 16}, {'time': 17}, {'time': 18}, {'time':19},
							{'time':20}, {'time':21}, {'time':22}, {'time':23}];

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

				<TimeSelect
					one='25(월)'
					two='26(화)'
					three='27(수)'
					four='28(목)'
					five='29(금)'
					six='30(토)'
					times = {time} />

			</div>
		);
	}
}

export default SelectTimeContainer;
