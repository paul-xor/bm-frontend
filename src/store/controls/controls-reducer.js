import { SET_SEARCH } from './controls-actions'

const initialState = {
  search: '',
  activity: ''
}

export const controlsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      }
    // case CLEAR_CONTROLS:
    //   return initialState
    default:
      return state
  }
}