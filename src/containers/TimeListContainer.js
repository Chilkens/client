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

    componentWillMount(){

        if(window.localStorage){
            if(localStorage.kaccount_email){
                console.log("로그인 되았음");
            }
        }
    }

    componentDidMount(){
        document.body.style.backgroundImage= "-webkit-gradient(linear, right top, left bottom, from(rgb(79, 145, 233)), to(rgb(102, 93, 240)))";
        console.log(document.body.style);
        GetTimeTableList(localStorage.kaccount_email)
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
