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
import Coustom from './app/pages/coustom'

export default class App extends Component {
  
  render() {
    return (
      <RootStack />
    )
  }
}
const MainStack = createStackNavigator({
  Main: Main,
  Next: Next,
  Coustom: Coustom
  }, {
    initialRouteName: 'Main',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6495ED',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
})
const RootStack = createStackNavigator({
    MainStack: MainStack,
    Login: Login,
  },{
    mode: 'modal',
    headerMode: 'none'
  }
)