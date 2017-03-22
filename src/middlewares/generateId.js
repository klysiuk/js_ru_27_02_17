const uuidV4 = require('uuid/v4');
import { ADD_COMMENT } from '../constants'

export default store => next => action => {
	const { type } = action
	if (type == ADD_COMMENT) {
		var updatedAction = {...action}
		updatedAction.payload.comment.id = uuidV4();
		next(updatedAction)
	} else {
		next(action)
	}
}
