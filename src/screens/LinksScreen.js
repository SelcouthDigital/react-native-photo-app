import React from 'react'
import { Image, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ExpoLinksView } from '@expo/samples'

class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links'
  }

  static propTypes = {
    image: PropTypes.shape()
  }

  render() {
    const { image } = this.props
    const uri = image && `data:image/png;base64,${image.base64}`
    return (
      <ScrollView style={s.container}>
        {image && <Image style={s.image} source={{ uri }} />}
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  image: {
    height: 100,
    width: 100
  }
})

const mapStateToProps = state => ({
  image: state.mediaAssets.image
})

export default connect(mapStateToProps)(LinksScreen)
