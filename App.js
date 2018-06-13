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
// import Ionicons from 'react-native-vector-icons/Ionicons'
import RouteConfig from './app/RouteConfig'
import StackNavigatorConfig from './app/StackNavigatorConfig'

const Navigator = createStackNavigator(RouteConfig, StackNavigatorConfig)

export default class App extends Component {
  
  render() {
    return (
      <Navigator />
    )
  }
}