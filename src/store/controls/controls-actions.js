export const SET_SEARCH = '@@controls/SET_SEARCH'
export const SET_ACTIVITY = '@@controls/SET_ACTIVITY'

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
})

export const setActivity = (activity) => ({
  type: SET_ACTIVITY,
  payload: activity,
})