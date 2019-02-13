import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

export class MonoText extends React.Component {
  static propTypes = {
    style: PropTypes.style
  }

  render() {
    const { style } = this.props
    return (
      <Text {...this.props} style={[style, { fontFamily: 'space-mono' }]} />
    )
  }
}
