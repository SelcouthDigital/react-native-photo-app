import { UPDATE_TIMESTAMP } from '../types'

const updateTimestamp = (timestamp = new Date()) => ({
  type: UPDATE_TIMESTAMP,
  payload: timestamp
})

export default {
  updateTimestamp
}
