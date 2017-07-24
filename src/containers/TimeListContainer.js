import React, {Component} from 'react';
import {Title, TimeTableItem} from '../components';

class TimeListContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div>
                <Title
                    title='마이페이지'
                    content='Time Picker로 약속시간을 편하게 정해보세요'
                    />
                <div className='container'>
                    <div className='row'>
                        <TimeTableItem />
                    </div>
                </div>
            </div>
        );
    }
}

export default TimeListContainer;
