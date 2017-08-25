import React, { PureComponent } from 'react';


export default class Share extends PureComponent {

  componentDidMount() {

      document.body.style.backgroundImage="-webkit-gradient(linear, right top, left top, from(rgb(25, 42, 69)), to(rgb(25, 42, 69))";
      let keyUrl = this.props.location.pathname.split("/")[2];
      console.log(keyUrl);
  }

  render() {

      return (
          <div>
              <div className="jumbotron text-center paddingTop">
                  모임시간이 확정되면<br/>마지막 사용자가 팀원들에게 공유합니다.
              </div>
              <br/><br/><br/>
              <div className="link-container text-center">
                  <p>공유 후 링크를 통해 재접속해주세요</p>
                  <div className="container">
                      <div className="row">
                          <div className="col-xs-4 have-margin-left">
                              <a id='kakao-link-btn'><img src="http://placehold.it/200x150&text=Logo" className="img-rounded" alt="kakao" /></a>
                              <div className="caption center-block">카카오톡</div>
                          </div>
                          <div className="col-xs-4 have-margin-left">
                              <a href="#"><img src="http://placehold.it/200x150&text=Logo" className="img-rounded" alt="link-copy" /></a>
                              <div className="caption center-block">링크복사</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
