import React, { Component } from 'react';
import Moment from 'moment';

import { Title, TimeSelect } from '../components';
import { getTimeTableByUrl } from '../lib/toServer';
import { SaveTimePickResult } from '../lib/toServer';


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
        this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillMount(){
        this.changeBodyColor();
    }

    async componentDidMount(){

        let url = this.props.location.pathname.split("/")[2];

        await getTimeTableByUrl(url)
        .then(response => {
			if(response.data.max <= response.data.current){
				let enableUrl = window.location.href.replace('select', 'enable');
				window.location.href = enableUrl;
			}else{
				this.setState({timeTable : response.data});
			}

        })
        .catch(error => console.log(error));

        this.calculateTimeDiff();
        this.setState({
            selecTimeResult : this.makeTimeSelectList(),
        });

    }

	changeBodyColor(){
        document.getElementsByTagName('body')[0].className = 'body_color_skyblue_gradient';
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

    addTimeToClick(id, time, e){

		this.addTimeToAttendence(id, time);
		this.toggleClickToString(e);

    }

	addTimeToAttendence(id, time){
		let stateCopy = Object.assign({}, this.state);
        let currentTime = String(Object.keys(stateCopy.selecTimeResult[id]));

        let currentIndex = stateCopy.selecTimeResult[id][currentTime].indexOf(time);
        if(currentIndex >= 0){
            stateCopy.selecTimeResult[id][currentTime].splice(currentIndex, 1);
            this.setState(stateCopy);
        }else{
            stateCopy.selecTimeResult[id][currentTime].push(time);
            this.setState(stateCopy);
        }
	}

	toggleClickToString(e){
		if(e.target.style.opacity === '0.3' || e.target.style.opacity === ''){
			e.target.style.opacity = '1.0';
			e.target.style.fontWeight = 'bold';
		}else{
			e.target.style.opacity = '0.3';
			e.target.style.fontWeight = 'bold';
		}
	}

    onSubmit(e){

        e.preventDefault();
        let result = {};
        this.state.selecTimeResult.forEach((item, index) => {
            result = Object.assign(result, item);
        });


        let resultSubmit = Object.assign({}, {
            pick : {
                createdBy : "테스트봇(호동꺼)",
            },
            pickDetailList : result,
        });

        let url = this.props.location.pathname.split("/")[2];

        SaveTimePickResult(url, resultSubmit)
        .then(response => {
			let enableUrl = window.location.href.replace('select', 'common');
			window.location.href = enableUrl;
		})
        .catch(error => console.log(error));

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
                    onSubmit = {this.onSubmit}
                    />

			</div>
		);
	}
}

export default SelectTimeContainer;
