import React, { PureComponent } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import { WebBrowser } from 'expo'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Button,
  ImageActionSheet
} from '@selcouth-digital/react-native-lego-blocks'

import { isDev } from '../lib/utils'

import AppActions from '../lib/store/app/actions'
import AuthActions from '../lib/store/auth/actions'
import MediaAssetsActions from '../lib/store/media-assets/actions'

class HomeScreen extends PureComponent {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    image: PropTypes.shape(),
    updateTimestamp: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    setImage: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired
  }

  state = {
    showImageActionSheet: false
  }

  componentDidMount = () => {
    const { updateTimestamp } = this.props
    updateTimestamp()
  }

  handleImageSelect = image => {
    const { setImage } = this.props
    this.setState({ showImageActionSheet: false })
    return setImage(image)
  }

  handlePhotoUpload = () => {
    const { image, uploadImage } = this.props
    return uploadImage(image)
  }

  updateUser = async () => {
    const { updateUser } = this.props
    console.log(updateUser)
    try {
      const userData = {
        userId: 123456,
        name: 'Simon',
        email: 'simon@selcouth.digital'
      }
      const response = await updateUser(userData)
      console.log(response)
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    const { showImageActionSheet } = this.state
    return (
      <View style={s.container}>
        <ScrollView
          style={s.container}
          contentContainerStyle={s.contentContainer}
        >
          <View style={s.welcomeContainer}>
            <Image
              source={
                isDev
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={s.welcomeImage}
            />
          </View>

          <View style={s.helpContainer}>
            <Text style={s.getStartedText}>Pick an image:</Text>
            <Button
              onPress={() => {
                this.setState({ showImageActionSheet: true })
              }}
              type="secondary"
            >
              Pick
            </Button>
            <ImageActionSheet
              onDismiss={() => this.setState({ showImageActionSheet: false })}
              onSelect={this.handleImageSelect}
              visible={showImageActionSheet}
            />
          </View>

          <View style={s.helpContainer}>
            <Text style={s.getStartedText}>Upload the image:</Text>
            <Button onPress={this.handlePhotoUpload} type="secondary">
              Upload
            </Button>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
})

const mapStateToProps = state => ({
  image: state.mediaAssets.image,
  timestamp: state.app.timestamp
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateTimestamp: AppActions.updateTimestamp,
      updateUser: AuthActions.updateUser,
      setImage: MediaAssetsActions.setImage,
      uploadImage: MediaAssetsActions.uploadImage
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
