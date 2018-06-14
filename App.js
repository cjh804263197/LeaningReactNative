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
// 导入自定义的RouteConfigs
import RouteConfigs from './app/RouteConfig'
// 导入自定义的StackNavigatorConfig
import StackNavigatorConfig from './app/StackNavigatorConfig'

const Navigator = createStackNavigator(RouteConfigs, StackNavigatorConfig)

export default class App extends Component {
  
  render() {
    return (
      <Navigator />
    )
  }
}