import React, {PureComponent} from 'react';

export default class TimeSelectCols extends PureComponent{

    render(){

        return(
            <tr>
                {this.props.counts.map((item, index) => {
                    return(
                        <td onClick={(e) => {
                            this.props.addTimeToClick(index, this.props.count)
                        }}>{this.props.count}</td>
                    );
                })}
            </tr>
        );



    }
}
