/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

class TestScrollView extends Component {
  constructor (props) {
    super(props)
    this.state ={
      imgs :[
        {
          uri: 'https://facebook.github.io/react-native/img/header_logo.png'
        },
        {
          uri: 'https://facebook.github.io/react-native/img/header_logo.png'
        },
        {
          uri: 'https://facebook.github.io/react-native/img/header_logo.png'
        },
        {
          uri: 'https://facebook.github.io/react-native/img/header_logo.png'
        }
        // require('./img/header_logo.png'),
        // require('./img/header_logo.png'),
        // require('./img/header_logo.png'),
        // require('./img/header_logo.png')
      ]
    }
  }

  render () {
    const item1 = (
      <View>
        <Text style={{fontSize: 96}}>Item1</Text>
        {this.state.imgs.map((pic, index) =>
            <Image key={index} source={pic} style={{width: 100, height: 100}}/>
          )}
      </View>
    )
    const item2 = this.state.imgs.map((pic, index) =>
      <Image key={index} source={pic} style={{width: 100, height: 100}}/>
    )
    return (
      <ScrollView>
        {item1}
        <Text style={{fontSize: 96}}>Item2</Text>
        {item2}
      </ScrollView>
    )
  }
}

// type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TestScrollView></TestScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
