import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';
import {bindActionCreators} from 'redux';

class PostsShow extends Component {

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	render() {
		return <div>Show posts {this.props.params.id}</div>;
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPost}, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsShow);