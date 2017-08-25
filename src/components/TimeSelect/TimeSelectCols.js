import React, {PureComponent} from 'react';

export default class TimeSelectCols extends PureComponent{

    render(){

        return(
            <tr>
                {this.props.counts.map((item, index) => {
                    return(
                        <td
                            key={item}
                            onClick={(e) => {
                            this.props.addTimeToClick(index, this.props.count, e)
                        }}>{this.props.count}</td>
                    );
                })}
            </tr>
        );



    }
}
