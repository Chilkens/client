import React, { PureComponent } from 'react';
import ListItem from './ListItem';

export default class ConfirmTimeList extends PureComponent {

    render() {
        return(
            <div className="list-group">

                {this.props.timeList.map((item) => {

                    let period = `${item.timetable.start} ~ ${item.timetable.end}`;

                    return(
                        <ListItem
                            key={item.timetable.tableId}
                            title={item.timetable.title.slice(0, 22)}
                            period={period}
                            member={item.pickName}
                            confirmCount={{confirm:3, notConfirm:2}}
                        />
                    );
                })}
            </div>
        );
    }
}
