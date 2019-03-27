import types from './types'

const initialState = {
  timestamp: new Date(),
  updated: false
}

const appReducer = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case types.UPDATE_TIMESTAMP:
      return {
        ...state,
        timestamp: payload,
        updated: true
      }
    default:
      return state
  }
}

export default appReducer
