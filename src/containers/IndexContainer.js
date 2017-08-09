import React, {Component} from 'react';
import {Title} from '../components';

class IndexContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <Title
                title={"TIME PICKER"}
                content={"Time Picker로 약속시간을 편하게 정해보세요"}
            />
        );
    }
}

export default IndexContainer;
