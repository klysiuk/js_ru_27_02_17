import {articles} from '../fixtures'
import {DELETE_ARTICLE, SELECT_ARTICLE} from '../constants'

export const articleReducer = (state = articles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.filter(article => article.id !== payload.id)

    }

    return state
}

export const selectedArticleReducer = (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case SELECT_ARTICLE:
            return payload.selectedArticles;

    }

    return state
}
