import React, {Component} from 'react';
import {Link} from 'react-router';

import {Title, TimeTableItem} from '../components';
import {GetTimeTableList} from '../lib/toServer';

class TimeListContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            timeList : [],
        };
    }

    componentDidMount(){
        GetTimeTableList('장호동')
        .then(response => {
            this.setState({
                timeList : response.data,
            });
        })
        .catch(error => console.log(error));
    }

    render(){

        return(
            <div>
                <Title
                    title={'내 타임피커'}
                    content={'Time Picker는 가장 편하게 약속시간을 결정할 수 있게 도와줍니다.'}
                    />
                <div className='container'>
                    <div className='row'>
                        <TimeTableItem
                            timeList={this.state.timeList}
                        />
                    </div>
                </div>
                <footer>
                   <div className="navbar-fixed-bottom">
                        <Link to ='/form'><h1 className="section-heading text-center">새로운 타임피커 만들기</h1></Link>
                   </div>
                 </footer>
            </div>
        );
    }
}

export default TimeListContainer;
