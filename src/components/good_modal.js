import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const doc = document;

class GoodModal extends Component {

	componentDidMount() {
		this.modalTarget = doc.createElement('<div>');
		this.modalTarget.classList.add('modal', 'good-modal');
		doc.body.appendChild(this.modalTarget);
		this._render();
	}

	componentWillUpdate() {
		this._render();
	}

	componentWillUnmount() {
		ReactDOM.unmountComponentAtNode(this.modalTarget);
		doc.body.removeChild(this.modalTarget);
	}

	_render() {
		ReactDOM.render(
			<div>{this.props.children}</div>,
			this.modalTarget
		);
	}

	render() {

		return(
			<div className="modal good-modal" tabIndex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<h4 className="modal-title">Good Modal!!</h4>
						</div>
						<div className="modal-body">
							<p>One fine body&hellip;</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		);

	}

}

export default GoodModal