import React, { PureComponent } from 'react';


export default class Share extends PureComponent {

  componentDidMount() {
    document.body.style.backgroundColor="rgb(20, 50, 68)";
    document.body.style.background="linear-gradient(0, 0)";
    console.log(document.body.style);

  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center vertical-center">
          모임시간이 확정되면<br/>
          마지막 사용자가 팀원들에게 공유합니다.
        </div>
        <br/><br/><br/>
        <div className="link-container text-center">
          <p>공유 후 링크를 통해 재접속해주세요.</p>
          <img src="http://placehold.it/200x150&text=Logo" className="img-rounded have-margin-right" alt="kakao" />
          <img src="http://placehold.it/200x150&text=Logo" className="img-rounded" alt="link-copy" />
        </div>
      </div>
    );
  }
}
