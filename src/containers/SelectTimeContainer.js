import React, { Component } from 'react';
import Moment from 'moment';

import { Title, TimeSelect } from '../components';
import { getTimeTableByUrl } from '../lib/toServer';

const time = [{'time':9}, {'time':10},	{'time':11}, {'time': 12}, {'time':13}, {'time':14},
 							{'time': 15}, {'time': 16}, {'time': 17}, {'time': 18}, {'time':19},
							{'time':20}, {'time':21}, {'time':22}, {'time':23}];

class SelectTimeContainer extends Component {
	constructor(props) {
		super(props);

        /* day korean patch
        Moment.lang('ko', {
            weekdays: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
            weekdaysShort: ["일","월","화","수","목","금","토"],
        });
        */

        this.state = {
            timeTable : {},
            timeDiff : 0,
            selecTimeResult : [],
        };
	}

    async componentDidMount(){

        let url = this.props.location.pathname.split("/")[2];

        await getTimeTableByUrl(url)
        .then(response => {
            this.setState({timeTable : response.data});
        })
        .catch(error => console.log(error));

        this.calculateTimeDiff();
        this.setState({
            selecTimeResult : this.makeTimeSelectList(),
        });

    }

    calculateTimeDiff(){

        let startDate = Moment(this.state.timeTable.start);
        let endDate = Moment(this.state.timeTable.end);

        this.setState({timeDiff : endDate.diff(startDate, 'days')});
    }

    makeTimeSelectList(){

        let timeSelectList = [];
        let currentDate = Moment(this.state.timeTable.start);
        for(let timeDiff = 1; timeDiff <= this.state.timeDiff + 1; timeDiff++){

            let oneDay = new Object();
            oneDay[currentDate.format().split("T")[0]] = [];
            timeSelectList.push(Object.assign({}, oneDay));
            currentDate = currentDate.add(1, 'day');
        }

        return timeSelectList;

    }

	render() {
		return(
			<div>
				<Title
					title='가능시간 선택'
					content=''
				/>

				<TimeSelect
					times = {this.state.selecTimeResult}
                    count = {this.state.timeDiff}
                    />

			</div>
		);
	}
}

export default SelectTimeContainer;
