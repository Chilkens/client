import React, {Component} from 'react';
import {Link} from 'react-router';

import { EnableTime } from '../components';
import { getIntersectionByUrl } from '../lib/toServer';

class EnableTimeContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            title : "",
            intersection : {
                date : '',
                time : []
            },
            hasIntersection : false,
        };
    }

    componentDidMount(){
        let url = this.props.location.pathname.split("/")[2];

        getIntersectionByUrl(url)
        .then((response) => {

            if(response.data.intersection){
                console.log(response.data);
                this.setState({
                    title : response.data.title,
                    intersection : response.data.intersection,
                    hasIntersection : true,
                });
            }else{
                this.setState({
                    hasIntersection : false,
                })
            }

        })
        .catch(error => console.log(error));
    }

    render(){

      const hasIntersectionView = (
        <div>
            <div className='jumbotron jumbotron-fluid'>
                <div className='container'>
                    <h1 className='display-3 no-marginBottom'>가장 많이 모일 수 있는</h1>
                    <h1 className='display-3 no-marginTop'>시간입니다.</h1>
                    <p className='lead has-marginTop'>가장 많은 멤버들이 모일 수 있는 시간을<br/>
                                                      공유해 주세요.</p>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <EnableTime
                        intersection={this.state.intersection}
                        title={this.state.title}
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


      const completeConfirmView = (
        <div>
            <div className='jumbotron jumbotron-fluid'>
                <div className='container'>
                    <h1 className='display-3 no-marginBottom'>모임시간 확정!</h1>
                    <p className='lead has-marginTop'>확정된 모임시간을 공유해주세요</p>
                </div>
            </div>


          <div className='container'>
              <div className='row'>
                  <EnableTime
                      timeList={this.state.timeList}
                  />
              </div>
          </div>
          <footer>
             <div className="navbar-fixed-bottom">
                  <Link to ='/'><h1 className="section-heading text-center">공유하기</h1></Link>
             </div>
           </footer>
        </div>
      );

      if(this.state.hasIntersection){
          return(
              hasIntersectionView
          )
      }else{
          return(
              noIntersectionView
          )
      }

    }
}


export default EnableTimeContainer;
