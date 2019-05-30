import types from '../app/types'

const initialState = {
  error: {},
  user: {}
}

const authReducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case types.REGISTER:
    case types.LOGIN:
    case types.UPDATE_USER:
      return {
        ...state,
        user: payload
      }
    case `${types.REGISTER}_REJECTED`:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}

export default authReducer
