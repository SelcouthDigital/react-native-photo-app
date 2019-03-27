import types from '../app/types'

const initialState = {
  user: {
    emailAddress: '',
    firstname: '',
    lastname: ''
  }
}

const authReducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case types.LOGIN:
    case types.UPDATE_USER:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default authReducer
