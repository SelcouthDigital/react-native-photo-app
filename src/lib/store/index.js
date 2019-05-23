import { combineReducers } from 'redux'

import { appReducers } from './app'
import { authReducers } from './auth'
import { mediaAssetsReducers } from './media-assets'

export default combineReducers({
  app: appReducers,
  auth: authReducers,
  mediaAssets: mediaAssetsReducers
})
