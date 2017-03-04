import React, {Component} from 'react';


class Comment extends Component {
	constructor() {
		super();
	}

	render() {
		var {comment} = this.props;
		var title = comment.title ? <p>{comment.title}</p> : null;

		return (
			<div style={{backgroundColor:'#ccc'}}>
				<p> User <strong>{comment.user}</strong> said: </p>
				{title}
				<p>{comment.text}</p>
			</div>
		);

	}
}

export default Comment;
