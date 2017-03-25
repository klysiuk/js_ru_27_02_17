import {normalizedComments} from '../fixtures'
import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS } from '../constants'
import {arrToMap} from './utils'
import {Record, Map} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

export default (comments = new Map({}), action) => {
    const { type, payload, randomId } = action

    switch (type) {
		case ADD_COMMENT:
			return comments.set(randomId, new CommentModel({
				id: randomId,
				...payload.comment
			}))
        case LOAD_COMMENTS + SUCCESS:
			return comments
				.merge(arrToMap(payload.response, CommentModel))
    }

    return comments
}
