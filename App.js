/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import JPushModule from 'jpush-react-native'
// 导入自定义的RouteConfigs
import RouteConfigs from './app/RouteConfig'
// 导入自定义的StackNavigatorConfig
import StackNavigatorConfig from './app/StackNavigatorConfig'

const Navigator = createStackNavigator(RouteConfigs, StackNavigatorConfig)

export default class App extends Component {

  // 组件被装载完成时
  componentDidMount () {

    // 新版本必需写回调函数
    // JPushModule.notifyJSDidLoad();
    JPushModule.notifyJSDidLoad((resultCode) => {
      console.warn(`notifyJSDidLoad:${resultCode}`)
    })

    // 接收自定义消息
    JPushModule.addReceiveCustomMsgListener((message) => {
      console.warn(`ReceiveCustomMsg:${message}`)
    })

    // 接收推送消息
    JPushModule.addReceiveNotificationListener((message) => {
      console.warn(`ReceiveNotification:${message}`)
    })

    // 打开通知
    JPushModule.addReceiveOpenNotificationListener((map) => {
      console.warn(`OpenNotification:${map}`)
    })
  }

  // 组件将要被卸载
  componentWillUnmount () {
    JPushModule.removeReceiveCustomMsgListener()
    JPushModule.removeReceiveNotificationListener()
  }
  
  render() {
    return (
      <Navigator />
    )
  }
}