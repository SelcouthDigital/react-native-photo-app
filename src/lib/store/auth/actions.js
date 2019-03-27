import * as firebase from 'firebase'

import types from '../app/types'

const login = ({ username, password }) => ({
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

const updateUser = async ({ userId, name, email }) => {
  try {
    const response = await firebase
      .database()
      .ref(`users/${userId}`)
      .set({
        username: name,
        email
      })
    return {
      type: types.UPDATE_USER,
      payload: response
    }
  } catch (err) {
    return {
      type: `${types.UPDATE_USER}_REJECTED`,
      payload: err
    }
  }
}

export default {
  login,
  logout,
  updateUser
}
