import React, { PureComponent } from 'react';
import SecondList from './SecondList';

export default class ConfirmTimeList extends PureComponent {
  render() {

    const intersectionList = (
      <div className="list-group">
          {this.props.timeList.map((item) => {
              let period = `${item.timetable.start} ~ ${item.timetable.end}`
              return(
                    <SecondList
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
    return(
      <div>
      </div>
    );
  }
}
