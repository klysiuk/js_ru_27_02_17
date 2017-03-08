import React from 'react'

export default (CustomComponent) => class Accordeon extends React.Component {
	state = {
		openArticleId: null,
		previouslyOpenArticleId: null
	}

	toggleOpenArticle = openArticleId => ev => {
		debugger;
		if (this.state.previouslyOpenArticleId == openArticleId) {
			this.setState({
				openArticleId: null,
				previouslyOpenArticleId: null
			});
		} else {
			this.setState({
				openArticleId,
				previouslyOpenArticleId: openArticleId
			});
		}
	}

	render() {
		return <CustomComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
	}
}
