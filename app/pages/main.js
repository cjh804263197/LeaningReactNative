import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Button, Input, Label} from 'teaset'

export default class Main extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.routeName
    }
  }

  componentWillMount () {
    if (this.props.navigation.getParam('loginUser', 'NoUser') === 'NoUser') {
      this.props.navigation.navigate('Login')
    }
  }

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
        <Label text={JSON.stringify(this.props.navigation.getParam('loginUser', 'no user'))}/>
        <Button type='primary' size='md' title='跳转到Next' onPress={() => this.props.navigation.navigate('Next')}/>
        <Button type='primary' size='md' title='修改Navigation Title' onPress={() => this.props.navigation.setParams({loginUser: {username: '肖建朋'}})}/>
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