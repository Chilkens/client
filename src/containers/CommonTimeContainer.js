import React, { PureComponent } from 'react';

import { Title, CommonTime } from '../components';

import { GetTimeTableList } from '../lib/toServer';

export default class ConfirmTimeContainer extends PureComponent {

    constructor(props){

        super(props);
        this.state = {
            timeList : [],
        };
    }

    componentDidMount(){

        GetTimeTableList('장호동')
        .then(response => {
            this.setState({
                timeList : response.data,
            });
        })
        .catch(error => console.log(error));
  }


  render() {

      return(
          <div>
              <Title
                  title= {'시간 선택 완료'}
                  content= {'마지막에 시간 선택을 완료한 사용자가 결과를 공유할 예정입니다'}
              />
              <div className="container">
                  <div className="row">
                      <CommonTime
                          timeList={this.state.timeList} />
                      </div>
                  </div>
              </div>
        );
    }
}
