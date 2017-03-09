import React from 'react'

export default (CustomComponent) => class Accordeon extends React.Component {
	state = {
	        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
		openArticleId: null,
	        //это ты перемудрила, одного поля достаточно
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
				//у тебя еще и значения всегда совпадают, совсем лишнее поле
				openArticleId,
				previouslyOpenArticleId: openArticleId
			});
		}
	}

	render() {
		return <CustomComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
	}
}
