import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

class PostsShow extends Component {

	static contextTypes = {
		router: PropTypes.object
	};

	onDeleteClick() {
		this.props.deletePost(this.props.params.id).then(() => {
			this.context.router.push('/');
		});
	}

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	render() {

		if (!this.props.post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/">Back to Index</Link>
				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}
				>
					Delete post
				</button>
				<h3>{this.props.post.title}</h3>
				<h6>Categories: {this.props.post.categories}</h6>
				<p>{this.props.post.content}</p>
			</div>
		);
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPost, deletePost}, dispatch);
}

function mapStateToProps(state) {
	return {post: state.posts.all};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);