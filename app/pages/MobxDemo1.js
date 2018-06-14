import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {Button, Label} from 'teaset'

import AppState from '../mobx/AppState'
import { observer } from 'mobx-react'

// 实例化，也可在导出的时候实例化
const appState = new AppState()

// 这里必须要写，不然监听不到值的变化
@observer
export default class MobxDemo1 extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
      headerTitle: 'Mobx练习一'
  })

  render () {
    return (
      <View style={styles.container}>
        <Label style={styles.welcome} text="计数器的一个Mobx例子"/>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 40}}>
          <Label style={styles.welcome} text={`当前的值是:${appState.timer}`}/>
          <Button type='primary' size='md' title='重置' onPress={this.onReset}/>
        </View>
      </View>
    )
  }

  onReset () {
    appState.resetTimer()
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // justifyContent: 'center',
      backgroundColor: 'white',
      alignItems: 'center'
  },
  welcome: {
      marginTop: 20,
      fontSize: 20, 
  }
})