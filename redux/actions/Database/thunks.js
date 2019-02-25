import {DaemonApi} from 'js-oip'
import {setTomograms, setTomogramCount, tomogramsError, tomogramsFetching, tomogramsSuccess} from "./creators";

export const fetchTomograms = () => async (dispatch) => {
	let daemon = new DaemonApi()
	
	dispatch(tomogramsFetching())
	let response
	try {
		response = await daemon.searchArtifactsByType('research', 'tomogram')
	} catch (err) {
		console.error(`Error fetching tomograms: ${err}`)
		dispatch(tomogramsError())
	}
	if (response) {
		let {success, tomograms, total} = response
		if (success) {
			dispatch(tomogramsSuccess())
			dispatch(setTomograms(tomograms))
			dispatch(setTomogramCount(total))
		} else {
			dispatch(tomogramsError())
		}
	}
	
}