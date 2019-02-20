import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import PropTypes from 'prop-types'

import AppNavigator from './src/navigation/AppNavigator'

import { ASSETS, FONTS } from './src/constants'

export default class App extends React.Component {
  static propTypes = {
    skipLoadingScreen: PropTypes.bool
  }

  state = {
    isLoadingComplete: false
  }

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

  loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([ASSETS.robotDev, ASSETS.robotProd]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': FONTS.spaceMono
      })
    ])

  render() {
    const { skipLoadingScreen } = this.props
    const { isLoadingComplete } = this.state
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
          startAsync={this.loadResourcesAsync}
        />
      )
    }

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
