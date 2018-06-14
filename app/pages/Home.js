import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Button, Input, Label} from 'teaset'

export default class Setting extends Component {
  // static navigationOptions = ({navigation}) => {
  //   return {
  //     title: navigation.state.routeName
  //   }
  // }
  constructor (props) {
    super(props)
    this.state = {
      text: '我是Home组件,下面是Mobx的练习例子'
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Label text={this.state.text}/>
        <Button type='primary' size='md' title='Push到Mobx例子' onPress={this.gotoMobxDemo.bind(this)}/>
        <Button type='primary' size='md' title='Push到CartMobx例子' onPress={this.gotoCartMobxDemo.bind(this)}/>
      </View>
    )
  }

  gotoMobxDemo () {
    this.props.navigation.push('MobxDemo1')
  }
  gotoCartMobxDemo () {
    this.props.navigation.push('CartMobxDemo')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
})