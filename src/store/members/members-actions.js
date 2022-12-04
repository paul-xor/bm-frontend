import { randomNumber, randActivity } from '../../utils/utils'

export const SET_MEMBERS  = '@@members/SET_MEMBERS'
export const SET_LOADING = '@@members/SET_LOADING'
export const SET_ERROR = '@@members/SET_ERROR'

export const setMembers = (members) => ({
  type: SET_MEMBERS,
  payload: members,
})

export const setLoading = () => ({
  type: SET_LOADING,
})

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
})

export const loadMembers = () => (dispatch, _, {client, api}) => {
  dispatch(setLoading())
  client.get(api.ALL_MEMBERS)
    .then(({ data }) => {
      // Note: I am adding more data (age, activity) required by test.
      data.forEach((element, ind) => {
        element.age = randomNumber(20,80)
        element.activities = randActivity(randomNumber(1,3))
      });
      dispatch(setMembers(data))
    })
    .catch((err) => dispatch(setError(err.message)))
}