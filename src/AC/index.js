import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, SET_DATE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticle(selectedArticleIds) {
    return {
        type: SELECT_ARTICLE,
        payload: { selectedArticleIds }
    }
}

export function setDate({from, to}) {
	return {
		type: SET_DATE,
		payload: { from, to }
	}
}
