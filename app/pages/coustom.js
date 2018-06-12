import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Button, Input, Label} from 'teaset'

class LogoTitle extends Component {
  render () {
    return (
      <View style={styles.titleContainer}>
        <Image style={{width: 30, height: 30}} source={require('../../img/header_logo.png')} />
        <Label text={this.props.title} />
      </View>
    )
  }
}

export default class Coustom extends Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {}
    return {
      headerTitle: <LogoTitle title='自定义导航栏组件'/>,
      headerRight: (
        <Button
          onPress={ params.increaseCount }
          title="+1"
          type='secondary'
        />
      )
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      text: '我是自定义导航栏组件',
      count: 0
    }
  }

  componentWillMount () {
    // 需要在this._increaseCount.bind(this),这样才可以在_increaseCount取到this.state.count,否则会报错
    this.props.navigation.setParams({increaseCount: this._increaseCount.bind(this)})
  }

  _increaseCount () {
    this.setState({count: this.state.count + 1})
  }

  render () {
    return (
      <View style={styles.container}>
        <Label text={this.state.text}/>
        <Label text={this.state.count}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})