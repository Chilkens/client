import React, { PureComponent } from 'react';

class FormTitle extends PureComponent{

	render() {
		return(

			<div className='container'>
				<form role="form">
						<fieldset>
								<div className="form-group">
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
