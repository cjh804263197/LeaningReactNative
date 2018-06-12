import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Button, Input, Label} from 'teaset'
import AV from 'leancloud-storage'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '登录成功'
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Label text={this.state.text}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
})