import { SET_MEMBERS, SET_ERROR, SET_LOADING } from './albums-actions'

const intialState = {
  status: 'idle', // loading / recieved / rejected
  error: null,
  list: [],
}

export const membersReducer = (state = intialState, {type, payload}) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      }
    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: payload,
      }
    case SET_MEMBERS:
      return {
        ...state,
        status: 'recieved',
        list: payload,
      }
    default:
      return state
  }
}