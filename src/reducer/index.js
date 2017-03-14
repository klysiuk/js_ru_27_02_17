import {combineReducers} from 'redux'
import {articleReducer,selectedArticleReducer}  from './articles'
import counterReducer from './counter'
import dateReducer from './dates'


export default combineReducers({
    articles: articleReducer,
	selectedArticles: selectedArticleReducer,
    count: counterReducer,
	date: dateReducer
})
