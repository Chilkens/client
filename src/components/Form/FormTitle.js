import React, { PureComponent } from 'react';

class FormTitle extends PureComponent{

	render() {
		return(

			<div className='container'>
				<form role="form">
						<fieldset>
								<div className="form-group">
									<h5 className="form_header white-letter">모임 이름</h5>
									<input className="form-control" placeholder="방 이름을 입력하세요."
										onChange={this.props.onChange} name="title" type="text" autoFocus />
								</div>
						</fieldset>
				</form>
			</div>

		);
	}
}

export default FormTitle;
