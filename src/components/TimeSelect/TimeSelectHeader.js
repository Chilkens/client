import React, {PureComponent} from 'react';

export default class TimeSelectHeader extends PureComponent{

    render(){

        return(
            <th className='select_text'>{this.props.title}</th>
        );
    }
}
