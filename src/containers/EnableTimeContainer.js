import React, {Component} from 'react';
import {Link} from 'react-router';

import {FailList} from '../components';
import {GetTimeTableList} from '../lib/toServer';

class FailListContainer extends Component{
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

    render(){

      const hasIntersectionView = (
        <div>

            <div className='container'>
                <div className='row'>
                    <FailList
                        timeList={this.state.timeList}
                    />
                </div>
            </div>
            <footer>
               <div className="navbar-fixed-bottom">
                    <Link to ='/#'><h1 className="section-heading text-center">공유하기</h1></Link>
               </div>
             </footer>
        </div>
      );

      const noIntersectionView = (
        <div>
          <div className='jumbotron jumbotron-fluid'>
              <div className='container'>
                  <h1 className='display-3 no-marginBottom'>가능한 모임시간이</h1>
                  <h1 className='display-3 no-marginTop'>없습니다.</h1>
                  <p className='lead has-marginTop'>모두가 가능한 시간이 없습니다.</p>
              </div>
          </div>
        </div>
      );


        return(
          <div>
            {this.props.hasIntersection ? hasIntersectionView : noIntersectionView}
          </div>
        );
    }
}

FailListContainer.propTypes = {
  hasIntersection: React.PropTypes.bool
}

FailListContainer.defaultProps = {
  hasIntersection: false
}

export default FailListContainer;
