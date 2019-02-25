import * as actions from '../actions/Database/creators'

const Database = (state = {
	tomograms: [],
	tomogramCount: 0,
	speciesCount: 0, //toDo create a function to set this
	tomogramsSuccess: false,
	tomogramsFetching: false,
	tomogramsError: false,
}, action) => {
	switch (action.type) {
		case actions.SET_TOMOGRAMS:
			return {
				...state,
				tomograms: action.tomograms
			}
		case actions.SET_TOMOGRAM_COUNT: {
			return {
				...state,
				tomogramCount: action.tomogramCount
			}
		}
		case actions.TOMOGRAMS_FETCHING:
			return {
				...state,
				tomogramsSuccess: false, tomogramsFetching: true, tomogramsError: false
			}
		case actions.TOMOGRAMS_SUCCESS:
			return {
				...state,
				tomogramsSuccess: true, tomogramsFetching: false, tomogramsError: false
			}
		case actions.TOMOGRAMS_ERROR:
			return {
				...state,
				tomogramsSuccess: false, tomogramsFetching: false, tomogramsError: true
			}
		default:
			return state
	}
}

export default Database