import React, {PureComponent} from 'react';
import TimeItem from './TimeItem';

class TimeTableItem extends PureComponent{

    render(){

        return(

            <div className="list-group">
                {this.props.timeList.map((item) => {
                    let period = `${item.timetable.start} ~ ${item.timetable.end}`
                    return(
                        <TimeItem
                            key={item.timetable.tableId}
                            title={item.timetable.title.slice(0, 22)}
                            period={period}
                            member={item.pickName}
                        />
                    );
                })}
            </div>

        );
    }
}

export default TimeTableItem;
