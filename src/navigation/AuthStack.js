import { createStackNavigator } from 'react-navigation'

// un-authenticated stack
// user is not signed in
import RegisterScreen from '../screens/unauthenticated/RegisterScreen'
import LoginScreen from '../screens/unauthenticated/LoginScreen'

const AuthenticatedStack = createStackNavigator({
  Register: RegisterScreen,
  Login: LoginScreen
})

export default AuthenticatedStack
