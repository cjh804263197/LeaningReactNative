/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
// 定义一个子组件测试Props属性
class Greeting extends Component {
  render () {
    return (
      <Text>Hello {this.props.name}!</Text>
    )
  }
}
// 定义一个子组件测试State状态
class Blink extends Component {
  constructor (props) {
    super(props)
    // 设置组件内部状态中的变量
    this.state = {
      showText: true
    }

    // 每1秒对showText状态做一次取反操作
    setInterval(() => {
      // 更新组件内部state状态中的变量
      this.setState(previousState => {
        return {
          showText: !previousState.showText
        }
      })
    }, 1000)
  }

  render () {
    let display = this.state.showText ? this.props.text : ''
    return (
      <Text>{display}</Text>
    )
  }
}

// type Props = {};
export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://facebook.github.io/react-native/img/header_logo.png'
    }
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 240, height: 220}}/>
        <View style={{alignItems: 'center'}}>
          <Greeting name='React Native'/>
          <Blink text='Hello React Native!'></Blink>
        </View>
        <Text style={styles.instructions}>
          My First ReactNative Project
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
