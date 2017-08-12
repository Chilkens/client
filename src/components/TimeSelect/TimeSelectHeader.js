import React, {PureComponent} from 'react';

export default class TimeSelectHeader extends PureComponent{

    render(){

        return(
            <th>{this.props.title}</th>
        );
    }
}
