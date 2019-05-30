import { createSwitchNavigator } from 'react-navigation'

import AuthStack from './AuthStack'
import MainStack from './MainStack'

export default createSwitchNavigator(
  {
    auth: AuthStack,
    main: MainStack
  },
  {
    initialRouteName: 'auth'
  }
)
