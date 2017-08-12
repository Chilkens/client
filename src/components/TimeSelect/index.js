import React, { PureComponent } from 'react';

import TimeSelectHeader from './TimeSelectHeader';
import TimeSelectMain from './TimeSelectMain';


import './style.css';

class TimeSelect extends PureComponent{

	render() {
		let times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
		let counts = [3, 4, 5, 6, 7, 8, 9];

		return(
			<div>

				<div className="row-fluid">
					<table className="table">
						<thead>
							<tr>
								{this.props.times.map((item, index) => {
									let timeHeader = String(Object.keys(item)).split("-")[2];
									return(
										<TimeSelectHeader
											key={index}
											title={timeHeader}
										/>
									);
								})}
							</tr>

						</thead>
							<TimeSelectMain
								times={times}
								counts={counts}
								addTimeToClick={this.props.addTimeToClick}
							/>
					</table>
					<button className="btn btn-default btn-block btn-gray">완료</button>

				</div>
			</div>
		);
	}

}

export default TimeSelect;
