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
  TextInput
} from 'react-native';

class PizzaTranslator extends Component {
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }

  render () {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, width: 200}}
          placeholder="请在这里输入文本"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map( (word) =>  word && '🍕' ).join(' ')}
        </Text>
      </View>
    )
  }
}

// type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PizzaTranslator></PizzaTranslator>
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
