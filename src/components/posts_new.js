import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {bindActionCreators} from 'redux';

class PostsNew extends Component {

	render() {

		const { fields: { title, categories, content }, handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create a new post</h3>

				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title}/>
				</div>

				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
				</div>

				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control" {...content}/>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>

			</form>
		);
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({createPost}, dispatch);
}

// reduxForm is the same as redux connect
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
	form: 'PostNewForm',
	fields: ['title', 'categories', 'content']
}, null, mapDispatchToProps)(PostsNew);