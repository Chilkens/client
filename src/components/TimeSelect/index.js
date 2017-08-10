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
								<th>{this.props.one}</th>
								<th>{this.props.two}</th>
								<th>{this.props.three}</th>
								<th>{this.props.four}</th>
								<th>{this.props.five}</th>
								<th>{this.props.six}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>9</td>
								<td>9</td>
								<td>9</td>
								<td>9</td>
								<td>9</td>
								<td>9</td>
							</tr>
							<tr>
								<td>10</td>
								<td>10</td>
								<td>10</td>
								<td>10</td>
								<td>10</td>
								<td>10</td>
							</tr>
							<tr>
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
							</tr>
							<tr>
								<td>13</td>
								<td>13</td>
								<td>13</td>
								<td>13</td>
								<td>13</td>
								<td>13</td>
							</tr>
							<tr>
								<td>14</td>
								<td>14</td>
								<td>14</td>
								<td>14</td>
								<td>14</td>
								<td>14</td>
							</tr>
							<tr>
								<td>15</td>
								<td>15</td>
								<td>15</td>
								<td>15</td>
								<td>15</td>
								<td>15</td>
							</tr>
							<tr>
								<td>16</td>
								<td>16</td>
								<td>16</td>
								<td>16</td>
								<td>16</td>
								<td>16</td>
							</tr>

							<tr>
								<td>17</td>
								<td>17</td>
								<td>17</td>
								<td>17</td>
								<td>17</td>
								<td>17</td>
							</tr>
							<tr>
								<td>18</td>
								<td>18</td>
								<td>18</td>
								<td>18</td>
								<td>18</td>
								<td>18</td>
							</tr>
							<tr>
								<td>19</td>
								<td>19</td>
								<td>19</td>
								<td>19</td>
								<td>19</td>
								<td>19</td>
							</tr>
							<tr>
								<td>20</td>
								<td>20</td>
								<td>20</td>
								<td>20</td>
								<td>20</td>
								<td>20</td>
							</tr>
							<tr>
								<td>21</td>
								<td>21</td>
								<td>21</td>
								<td>21</td>
								<td>21</td>
								<td>21</td>
							</tr>
							<tr>
								<td>22</td>
								<td>22</td>
								<td>22</td>
								<td>22</td>
								<td>22</td>
								<td>22</td>
							</tr>
							<tr>
								<td>23</td>
								<td>23</td>
								<td>23</td>
								<td>23</td>
								<td>23</td>
								<td>23</td>
							</tr>
						</tbody>
					</table>
					<button className="btn btn-default btn-block btn-gray">완료</button>

				</div>
			</div>
		);
	}

}

export default TimeSelect;
