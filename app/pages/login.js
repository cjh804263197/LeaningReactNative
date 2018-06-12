import React, {Component} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import {Button, Input, ModalIndicator} from 'teaset'
import AV from 'leancloud-storage'
import forge from 'node-forge'
import Main from './main'


export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  /**
   * MD5加密
   * @param {*} val 
   */
  md5 (val) {
    let md = forge.md.md5.create()
    md.update(val)
    return md.digest().toHex()
  }

  render () {
    return (
      <View style={styles.loginview}>
        <View style={styles.loginimg}>
          <Image source={require('../../img/header_logo.png')}/>
        </View>
        <View style={styles.loginpanel}>
          <Input style={{width: 200}}
            size='md'
            value={this.state.username}
            onChangeText={text => this.setState({username: text})}
            placeholder="请输入账号"
            keyboardType='phone-pad'
            />
          <Input style={{width: 200, marginTop: 10}}
            size='md'
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
            placeholder="请输入密码"
            secureTextEntry={true}
            />
          <Button style={{marginTop: 20, width: 180}} type='primary' size='md' title='登录' onPress={this.loginBtnPress.bind(this)}/>
        </View>
      </View>
    )
  }

  loginBtnPress () {
    if (this.state.username === '' || this.state.password === '') {
      alert('账号密码不能为空')
    } else {
      console.warn(`username=${this.state.username} password=${this.md5(this.state.password)}`)
      ModalIndicator.show(`登录中...`)
      AV.User.logInWithMobilePhone(this.state.username, this.state.password).then(
        loginUser => {
          ModalIndicator.hide()
          this.props.navigation.navigate('Main', {loginUser: loginUser.toJSON()})
        }
      ).catch(
        err => {
          ModalIndicator.hide()
          alert('登录失败')
          console.error(err)
        }
      )
    }
  }
}

const styles = StyleSheet.create({
  loginview: {
    flex: 1,
    padding: 30,
    backgroundColor: '#6495ED'
  },
  loginimg: {
    flexDirection: 'row',
    height: 100,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  loginpanel: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  }
})