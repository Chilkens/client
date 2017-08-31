import React, { PureComponent } from 'react';

class FormTitle extends PureComponent{

	render() {
		return(

			<div className='container'>
				<form role="form">
						<fieldset>
								<div className="form-group">
										<h5 className="white-letter">모임 이름</h5>
										<input className="form-control form-input" placeholder="모임 이름을 입력해 주세요."
										onChange={this.props.onChange} name="title" type="text" autoFocus />
								</div>
						</fieldset>
				</form>
			</div>

		);
	}
}

export default FormTitle;
