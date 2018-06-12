import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Button, Input, Label} from 'teaset'

export default class Next extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '路由跳转演示'
    }
  }
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
        <Button type='primary' size='md' title='Push to Main:this.props.navigation.push(Main)' onPress={() => this.props.navigation.push('Main')}/>
        <Button type='primary' size='md' title='Navigate to Main:this.props.navigation.navigate(Main)' onPress={() => this.props.navigation.navigate('Main')}/>
        <Button type='primary' size='md' title='Navigate to Login:this.props.navigation.navigate(Login)}' onPress={() => this.props.navigation.navigate('Login')}/>
        <Button type='primary' size='md' title='Pop to Top:this.props.navigation.popToTop()' onPress={() => this.props.navigation.popToTop()}/>
        <Button type='primary' size='md' title='Push to Login:this.props.navigation.push(Login)' onPress={() => this.props.navigation.push('Login')}/>
        <Button type='primary' size='md' title='自定义导航栏' onPress={() => this.props.navigation.push('Coustom')}/>
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