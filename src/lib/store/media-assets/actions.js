import * as firebase from 'firebase'

import types from './types'

const setImage = image => ({
  type: types.SET_IMAGE,
  payload: image
})

const uploadImage = image => {
  const db = firebase.firestore()
  const storageRef = firebase.storage().ref()
  const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1)
  const imageRef = storageRef.child(`images/${filename}`)

  const onImageSuccess = snpashot => {
    // save the result in DB
    db.collection('mediaitems').add({
      height: 100,
      width: 100,
      type: image.type,
      url: `${snpashot.bucket}/${snpashot.name}`
    })
  }

  const onImageError = err => {
    // handle the error
  }

  return {
    type: types.UPLOAD_IMAGE,
    payload: imageRef
      .putString(image.base64, 'base64')
      .then(onImageSuccess, onImageError)
  }
}

export default {
  setImage,
  uploadImage
}
