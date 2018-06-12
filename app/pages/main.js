import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Button, Input, Label} from 'teaset'

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
        <Button type='primary' size='md' title='跳转到Next' onPress={() => this.props.navigation.navigate('Next')}/>
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