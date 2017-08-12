import React, {PureComponent} from 'react';

import TimeSelectCols from './TimeSelectCols';

export default class TimeSelectMain extends PureComponent{

    render(){

        return(
            <tbody>
                {this.props.times.map((item, index) => {
                    return(
                        <TimeSelectCols
                            key={index}
                            count={item}
                            counts={this.props.counts}
                            addTimeToClick={this.props.addTimeToClick}
                        />
                    )
                })}
            </tbody>
        );
    }
}
