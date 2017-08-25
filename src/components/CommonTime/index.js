import React, { PureComponent } from 'react';
import ListItem from './ListItem';

export default class CommonTime extends PureComponent {

    render() {

        let period = `${this.props.timeList.start} ~ ${this.props.timeList.end}`;
        let title = String(this.props.timeList.title).slice(0, 22);

        return(
            <div className="list-group">
            <ListItem
                key={this.props.timeList.tableId}
                title={title}
                period={period}
                member={this.props.timeList.pickName}
                confirmCount={{max:this.props.timeList.max, current:this.props.timeList.current}}
            />
            </div>
        );
    }
}
