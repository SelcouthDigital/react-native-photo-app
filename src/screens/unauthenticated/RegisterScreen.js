import React, { PureComponent } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AuthActions from '../../lib/store/auth/actions'

class RegisterScreen extends PureComponent {
  static navigationOptions = {
    title: 'Register'
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }),
    register: PropTypes.func.isRequired
  }

  state = {
    email: '',
    password: ''
  }

  handleInputChange = (text, fieldName) => {
    this.setState({ [fieldName]: text })
  }

  onSubmit = async e => {
    const {
      navigation: { navigate },
      register,
      user
    } = this.props
    const { email, password } = this.state

    try {
      const response = await register({ email, password })
      if (response.payload.message) {
        return Alert.alert(
          'Error',
          response.payload.message,
          [{ text: 'OK' }],
          {
            cancelable: false
          }
        )
      }
      if (response.payload.user) {
        navigate('main')
      }
    } catch (err) {
      return Alert.alert('Error', err.message, [{ text: 'OK' }], {
        cancelable: false
      })
    }
  }

  render = () => {
    const { email, password } = this.state
    return (
      <View style={s.container}>
        <TextInput
          onChangeText={val => this.handleInputChange(val, 'email')}
          placeholder="Email"
          style={s.input}
          value={email}
        />
        <TextInput
          onChangeText={val => this.handleInputChange(val, 'password')}
          placeholder="Password"
          secureTextEntry
          style={s.input}
          value={password}
        />
        <Button onPress={this.onSubmit} title="Register" />
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
    fontSize: 16,
    height: 60,
    marginBottom: 20,
    paddingHorizontal: 20
  },
  errorText: {
    color: 'red',
    fontSize: 16
  }
})

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      register: AuthActions.register
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen)
