import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Button, Input, Label} from 'teaset'

export default class Setting extends Component {
  // static navigationOptions = ({navigation}) => {
  //   return {
  //     title: navigation.state.routeName
  //   }
  // }
  constructor (props) {
    super(props)
    this.state = {
      text: '我是Home组件'
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