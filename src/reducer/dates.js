import {DELETE_ARTICLE, SELECT_ARTICLE, SET_DATE} from '../constants'
const defaultValues = { from: null, to: null}

export default (state = defaultValues, action) => {
    const { type, payload = {} } = action
	const { from, to } = payload;

    switch (type) {
        case SET_DATE:
            return { from, to }

    }

    return state
}
