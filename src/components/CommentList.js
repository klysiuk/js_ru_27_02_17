import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'
import {connect} from 'react-redux'
import {loadComments} from '../AC'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

	componentWillReceiveProps({isOpen, article, loadComments}) {
		if (!this.props.isOpen && isOpen && !article.commentsLoaded) {
			loadComments(article.id)
		}
	}

    componentDidUpdate() {
        this.size = this.container.getBoundingClientRect()
    }

    render() {
        const {isOpen, toggleOpen} = this.props
//        console.log('---', this.size)
        return (
            <div ref={this.getContainerRef}>
                <a href="#" onClick={toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getContainerRef = (ref) => {
        this.container = ref
        if (ref) {
            this.size = ref.getBoundingClientRect()
        }
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null

        if (!article.comments || !article.comments.length) {
            return <div>
                <h3>
                    No comments yet
                </h3>
                <NewCommentForm articleId={article.id} />
            </div>
        }

		if (article.commentsLoading) {
			return (
				<div> <Loader /></div>
			)
		}

		if (article.commentsLoaded) {
			const commentItems = article.comments.map(id => <li key={id}><Comment id={id} /></li>)
			return (
				<div>
					<ul>
						{commentItems}
					</ul>
					<NewCommentForm articleId={article.id} />
				</div>
			)
		}

    }
}

export default connect(null, { loadComments })(toggleOpen(CommentList))
