export const SET_TOMOGRAMS = 'SET_TOMOGRAMS'
export const setTomograms = (tomograms) => ({
	type: SET_TOMOGRAMS,
	tomograms
})

export const SET_TOMOGRAM_COUNT = 'SET_TOMOGRAM_COUNT'
export const setTomogramCount = (tomogramCount) => ({
	type: SET_TOMOGRAM_COUNT,
	tomogramCount
})

export const TOMOGRAMS_SUCCESS = 'TOMOGRAMS_SUCCESS'
export const TOMOGRAMS_FETCHING = 'TOMOGRAMS_FETCHING'
export const TOMOGRAMS_ERROR = 'TOMOGRAMS_ERROR'

export const tomogramsSuccess = () => ({
	type: TOMOGRAMS_SUCCESS
})
export const tomogramsFetching = () => ({
	type: TOMOGRAMS_FETCHING
})
export const tomogramsError = () => ({
	type: TOMOGRAMS_ERROR
})