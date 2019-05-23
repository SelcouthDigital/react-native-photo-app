import types from './types'

const initialState = {
  image: null
}

const mediaAssetsReducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case types.SET_IMAGE:
      return {
        ...state,
        image: payload
      }
    default:
      return state
  }
}

export default mediaAssetsReducer
