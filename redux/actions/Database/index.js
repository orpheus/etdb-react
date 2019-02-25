import * as DATABASE_ACTIONS from './creators'
import * as DATABASE_THUNKS from './thunks'

export const DatabaseActions = {
	...DATABASE_ACTIONS,
	...DATABASE_THUNKS
}