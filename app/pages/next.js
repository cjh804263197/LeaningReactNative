import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Button, Input, Label} from 'teaset'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '我是下一个组件'
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Label text={this.state.text}/>
        <Button type='primary' size='md' title='Push to Main' onPress={() => this.props.navigation.push('Main')}/>
        <Button type='primary' size='md' title='Navigate to Main' onPress={() => this.props.navigation.navigate('Main')}/>
        <Button type='primary' size='md' title='Navigate to Login' onPress={() => this.props.navigation.navigate('Login')}/>
        <Button type='primary' size='md' title='Pop to Top' onPress={() => this.props.navigation.popToTop()}/>
        <Button type='primary' size='md' title='Push to Login' onPress={() => this.props.navigation.navigate('Login')}/>
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