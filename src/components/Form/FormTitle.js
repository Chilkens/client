"use strict";

import React, { PureComponent } from 'react';

class FormTitle extends PureComponent{

	render() {
		return(

			<div className='container'>
				<p>{this.props.title}</p>
				<hr className="my-4"/>
			</div>

		);
	}
}

export default FormTitle;
