'use strict'

import React, { PureComponent } from 'react';
import './style.css';

class TimeSelect extends PureComponent{

	render() {
		return(
			<div>
				<div className="row-fluid">
					<table className="table">
						<thead>
							<tr>
								<th>1(월)</th>
								<th>2(화)</th>
								<th>3(수)</th>
								<th>4(목)</th>
								<th>5(금)</th>
								<th>6(금)</th>
								<th>7(금)</th>
								<th>8(토)</th>
								<th>9(일)</th>
								<th>10(월)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>11</td>
								<td>11</td>
								<td>11</td>
								<td>11</td>
								<td>11</td>
								<td>11</td>
								<td>11</td>
								<td>11</td>
								<td>11</td>
								<td>11</td>
							</tr>
							<tr>
								<td>12</td>
								<td>12</td>
								<td>12</td>
								<td>12</td>
								<td>12</td>
								<td>12</td>
								<td>12</td>
								<td>12</td>
								<td>12</td>
								<td>12</td>
							</tr>
							<tr>
								<td>13</td>
								<td>13</td>
								<td>13</td>
								<td>13</td>
								<td>13</td>
								<td>13</td>
								<td>13</td>
								<td>13</td>
								<td>13</td>
								<td>13</td>
							</tr>
						</tbody>
					</table>
					<button style={{borderRadius:0}} className="btn btn-default w-100">완료</button>
				</div>
			</div>
		);
	}

}

export default TimeSelect;
