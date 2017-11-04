import React, {PureComponent} from 'react';

import Title from '../Title';

export default class NotFound extends PureComponent{

    componentWillMount(){
        this.changeBodyColor();
    }

    changeBodyColor(){
        document.getElementsByTagName('body')[0].className = 'body_color_skyblue_gradient';
    }

    render(){

        return(
            <Title
                title={"Page 404 NOT FOUND"}
            />
        );
    }
}
