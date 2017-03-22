const uuidV4 = require('uuid/v4');
import { ADD_COMMENT } from '../constants'

export default store => next => action => {
	const { type } = action
        //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - плохая практика
	if (type == ADD_COMMENT) {
		var updatedAction = {...action}
	        //и лучше не мутировать payload, мало-ли что там станут передавать
		updatedAction.payload.comment.id = uuidV4();
		next(updatedAction)
	} else {
		next(action)
	}
}
