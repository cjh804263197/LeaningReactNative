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
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import Login from './app/pages/login'

export default class App extends Component {
  /**
   * 动态页面加载
   * @param {*} route 路由
   * @param {*} navigator 导航器
   * @returns 所要跳转的页面组件
   */
  renderScene (route, navigator) {
    let Component = route.component
    if (Component) {
      return <Component {...route.params} navigator={navigator} />
    }
  }

  /**
   * 配置场景动画
   * @param {*} route 路由
   * @param {*} routeStack 路由栈
   * @returns 动画 
   */
  configureSence (route, routeStack) {
    if (route.type === 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight // 右侧弹出
  }

  render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{component: Login}}
        configureSence={this.configureSence}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  
});
