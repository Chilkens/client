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
        this.changeBodyColor();
    }

    componentDidMount(){


        GetTimeTableList(localStorage.kaccount_email)
        .then(response => {
            this.setState({
                timeList : response.data,
            });
        })
        .catch(error => console.log(error));
    }

    changeBodyColor(){
        document.getElementsByTagName('body')[0].className = 'body_color_skyblue_gradient';
    }

    render(){

        let selectUrl = window.location.href.replace('list', 'common');

        return(
            <div>
                <Title
                    title={'내 타임피커'}
                    content={''}
                    />
                <div className='container'>
                    <div className='row'>
                        <TimeTableItem
                            timeList={this.state.timeList}
                            selectUrl={selectUrl}
                        />
                    </div>
                </div>
                <footer>
                   <div className="navbar-fixed-bottom">
                        <Link to ='/form'><h1 className="section-heading button_content">새로운 타임피커 만들기</h1></Link>
                   </div>
                 </footer>
            </div>
        );
    }
}

export default TimeListContainer;
