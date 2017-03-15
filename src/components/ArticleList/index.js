import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Article from '../Article/index'
import CSSTransition from 'react-addons-css-transition-group'
import accrdion from '../../decorators/accordion'
import './style.css'

class ArticleList extends Component {
    render() {
        const {articles, toggleOpenItem, isItemOpened} = this.props

        const articleComponents = articles
        //ок, но еще лучше делать фильтрацию в коннекте
		.filter(filterArticles(this.props))
		.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={isItemOpened(article.id)}
                     toggleOpen={toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <CSSTransition component="ul"
                           transitionName="article-list"
                           transitionAppear={true}
                           transitionAppearTimeout={100}
                           transitionEnterTimeout={500}
                           transitionLeaveTimeout={300}
            >
                {articleComponents}
            </CSSTransition>
        )
    }
}

const filterArticles = ({selectedArticleIds, from, to}) => article => {
	let isSelectedArticle = selectedArticleIds.length ? selectedArticleIds.includes(article.id) : true

	if (isSelectedArticle && to && from) {
		const articleDate = new Date(article.date)
		return (articleDate > from && articleDate < to)
	}
	return isSelectedArticle;
}

const mapStateToProps = ({articles, selectedArticleIds, date : { from, to }}) => ({
    articles,
	selectedArticleIds,
	from,
	to
})

export default connect(mapStateToProps)(accrdion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}
