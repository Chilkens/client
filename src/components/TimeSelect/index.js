import React, { PureComponent } from 'react';

import TimeSelectHeader from './TimeSelectHeader';
import TimeSelectMain from './TimeSelectMain';


import './style.css';

class TimeSelect extends PureComponent{

	render() {
		let times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
		let counts = Array.apply(null, {length: this.props.count+1}).map(Number.call, Number);
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
					<button className="btn btn-default btn-block btn-gray" onClick={this.props.onSubmit}>완료</button>

				</div>
			</div>
		);
	}

}

export default TimeSelect;
