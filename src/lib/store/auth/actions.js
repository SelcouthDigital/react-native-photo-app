import * as firebase from 'firebase'

import types from './types'

const register = ({ email, password }) => async () => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    return {
      type: types.REGISTER,
      payload: response
    }
  } catch (err) {
    return {
      type: `${types.REGISTER}_REJECTED`,
      payload: err
    }
  }
}

const login = ({ email, password }) => ({
  type: types.LOGIN,
  payload: firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
      console.log('We are authenticated now!')
    }

    // Do other things
  })
})

const logout = user => ({
  type: types.LOGOUT,
  payload: user
})

export default {
  register,
  login,
  logout
}
