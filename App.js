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
import Login from './app/pages/login'
import Main from './app/pages/main'
import Next from './app/pages/next'

export default class App extends Component {
  
  render() {
    return (
      <RootStack />
    )
  }
}

const RootStack = createStackNavigator({
  Login: Login,
  Main: Main,
  Next: Next
}, {
  initialRouteName: 'Login'
})