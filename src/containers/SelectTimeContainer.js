import React, { Component } from 'react';
import Moment from 'moment';

import { Title, TimeSelect } from '../components';
import { getTimeTableByUrl } from '../lib/toServer';

const time = [{'time':9}, {'time':10},	{'time':11}, {'time': 12}, {'time':13}, {'time':14},
 							{'time': 15}, {'time': 16}, {'time': 17}, {'time': 18}, {'time':19},
							{'time':20}, {'time':21}, {'time':22}, {'time':23}];

const colorStyle = {
  backgroundColor: '#6cee80'
};

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
        this.addTimeToClick = this.addTimeToClick.bind(this);
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

      	document.body.style.background= "linearGradient(-120deg, #82B7EE, #3EB8E4)";
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

    addTimeToClick(e, id, time){

        let stateCopy = Object.assign({}, this.state);
        let currentTime = String(Object.keys(stateCopy.selecTimeResult[id]));

        let currentIndex = stateCopy.selecTimeResult[id][currentTime].indexOf(time);
        if(currentIndex >= 0){
            stateCopy.selecTimeResult[id][currentTime].splice(currentIndex, 1);
            this.setState(stateCopy);
            console.log(stateCopy.selecTimeResult[id]);
        }else{
            stateCopy.selecTimeResult[id][currentTime].push(time);
            this.setState(stateCopy);
            console.log(stateCopy.selecTimeResult[id]);
        }
        {e.target.style.backgroundColor == 'rgb(108, 238, 128)' ? e.target.style.backgroundColor=''
                                                                : e.target.style.backgroundColor='rgb(108, 238, 128)'};

    }

    onSubmit(){

        console.log(this.state.selecTimeResult[0]);
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
                    addTimeToClick = {this.addTimeToClick}
                    />

			</div>
		);
	}
}

export default SelectTimeContainer;
