import types from './types'

const updateTimestamp = (timestamp = new Date()) => ({
  type: types.UPDATE_TIMESTAMP,
  payload: timestamp
})

export default {
  updateTimestamp
}
