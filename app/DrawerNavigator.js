import React, {Component} from 'react'
import {Image, StyleSheet} from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import MainTab from './TabNavigator'
import About from './pages/About'
import Help from './pages/Help'

export default MainDraw = createDrawerNavigator({
  MainTab: {
    screen: MainTab,
    navigationOptions: ({navigation}) => ({
      drawerLabel: '主界面',
      drawerIcon: (({focused, tintColor}) => {
        return(
          <Image
            source={require('../assets/images/i_home.png')}
            style={[{tintColor: tintColor},styles.drawerImage]}
          />
        )
      })
    })
  },
  About: {
    screen: About,
    navigationOptions: ({navigation}) => ({
      drawerLabel: '关于',
      drawerIcon: (({focused, tintColor}) => {
        return(
          <Image
            source={require('../assets/images/i_user.jpg')}
            style={[{tintColor: tintColor},styles.drawerImage]}
          />
        )
      })
    })
  },
  Help: {
    screen: Help,
    navigationOptions: ({navigation}) => ({
      drawerLabel: '帮助',
      drawerIcon: (({focused, tintColor}) => {
        return(
          <Image
            source={require('../assets/images/i_live.png')}
            style={[{tintColor: tintColor},styles.drawerImage]}
          />
        )
      })
    })
  },
}, {
  drawerWidth: 200, // 抽屉的宽度
  drawerPosition: 'left', // 抽屉在左边还是右边 默认是左边
  // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
  contentOptions: {
    initialRouteName: MainTab, // 默认页面组件
    activeTintColor: 'white',  // 选中文字颜色
    activeBackgroundColor: '#ff8500', // 选中背景颜色
    inactiveTintColor: '#666',  // 未选中文字颜色
    inactiveBackgroundColor: '#fff', // 未选中背景颜色
    style: {  // 样式
    }
  }
})

const styles = StyleSheet.create({
  drawerImage:{
      width:25,
      height:25
  }
})