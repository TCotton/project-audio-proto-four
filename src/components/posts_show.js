import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

class PostsShow extends Component {

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
				<h3>{this.props.post.title}</h3>
				<h6>Categories: {this.props.post.categories}</h6>
				<p>{this.props.post.content}</p>
			</div>
		);
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPost}, dispatch);
}

function mapStateToProps(state) {
	return {post: state.posts.all};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);