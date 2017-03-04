import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
	constructor() {
		super();
	}

	render() {
		var {comments} = this.props;
		var commentComponents = comments && comments.map(comment => <li key={comment.id}> <Comment comment={comment}/> </li>);

		return (
			<ul>
				{commentComponents}
			</ul>
		);
	}
}

export default CommentList;
