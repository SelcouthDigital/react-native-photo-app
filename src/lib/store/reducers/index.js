import { UPDATE_TIMESTAMP } from '../types'

const initialState = {
  timestamp: new Date(),
  updated: false
}

const rootReducer = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case UPDATE_TIMESTAMP:
      return {
        ...state,
        timestamp: payload,
        updated: true
      }
    default:
      return state
  }
}

export default rootReducer
