import React, {Component} from 'react'
import CommentList from './CommentList'


class Article extends Component {

	constructor() {
		super()
		this.state = {
			isOpen: false,
			commentsVisible: false
		}
	}

	render() {
		const {article} = this.props
		const {isOpen} = this.state
		const body = isOpen ? <section>{article.text}</section> : null
		const commentsButton = <button onClick={this.toggleComments}> {this.state.commentsVisible ? 'Hide' : 'Show'}</button>
		const commentList = this.state.commentsVisible ? [<CommentList key='comments' comments={article.comments}/>,<p key='p'>{commentsButton}</p>] : null;

		return (
			<div>
			<h3 onClick={this.handleClick}>{article.title}</h3>
			{body}
			{commentsButton}
			{commentList}
			</div>
		)
	}

	handleClick = (ev) => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	toggleComments = (ev) => {
		this.setState({
			commentsVisible: !this.state.commentsVisible
		});
	}
}

export default Article
