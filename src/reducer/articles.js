import {normalizedArticles} from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export default (state = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)
		case ADD_COMMENT:
			let affectedArticle = state.find(article => article.id == payload.parentId);
			affectedArticle.comments.push(payload.comment.id);
			return [...state, affectedArticle];
    }

    return state
}
