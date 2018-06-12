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
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Login from './app/pages/login'
import Main from './app/pages/main'
import Next from './app/pages/next'
import Coustom from './app/pages/coustom'
import Setting from './app/pages/setting'

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
const SettingStack = createStackNavigator(
  {
    Setting: Setting
  },{
    initialRouteName: 'Setting',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3CB371',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)
const HomeStack = createBottomTabNavigator(
  {
    MainStack: MainStack,
    SettingStack: SettingStack
  },{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'MainStack') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'SettingStack') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
)
const RootStack = createStackNavigator({
    HomeStack: HomeStack,
    Login: Login,
  },{
    mode: 'modal',
    headerMode: 'none'
  }
)