import React, {PureComponent, PropTypes} from 'react';

class Title extends PureComponent{

    render(){

        return(
            <div className='jumbotron jumbotron-fluid'>
                <div className='container'>
                    <h1 className='display-3'>{this.props.title}</h1>
                    <p className='lead'>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

Title.propTypes = {
    title : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
}

export default Title;
