import { combineReducers } from 'redux'

import { appReducers } from './app'
import { authReducers } from './auth'

export default combineReducers({
  app: appReducers,
  auth: authReducers
})
