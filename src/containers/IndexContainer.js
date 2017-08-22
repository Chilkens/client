import React, {Component} from 'react';
import {Index, LoginButton} from '../components';


class IndexContainer extends Component{

    constructor(props){
        super(props);

        this.kakaoLoginSucess = this.kakaoLoginSucess.bind(this);
        this.kakaoLoginFailure = this.kakaoLoginFailure.bind(this);
    }

    componentWillMount() {
        if(localStorage.kaccount_email){
            window.location.href = window.location.href + 'list';
        }
    }

    componentDidMount(){


    }

    loadScript(src){

        const tag = document.createElement('script');
        tag.async = false;
        tag.src = src;
        document.getElementsByTagName('body').appendChild(tag);
    }

    kakaoLoginSucess(response){

        console.log(response);
    }

    kakaoLoginFailure(error){

        console.log(error);
    }

    onClick(e){
        e.preventDefault();

    }

    render(){

        return(
            <div>
                <Index />
                <LoginButton/>
            </div>
        );
    }
}

export default IndexContainer;
