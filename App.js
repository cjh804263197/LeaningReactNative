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
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator
} from 'react-native';
import axios from 'axios'

const host = 'http://192.168.2.101:8090/'

class TestFlatList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      flatListData: [],
      animating: false
    }
  }

  /**
   * 当组件被装载完成之后会立即出发
   * 注：在该函数中修改state会导致组件重新渲染，这个地方是进行网络请求的不错选择
   */
  componentDidMount () {
    this.setState({
      animating: true
    })
    axios.post(host+'api/corp/query', {}).then(
      res => {
        console.warn(res.data.rows)
        this.setState({
          flatListData: res.data.rows,
          animating: false
        })
      }
    ).catch(
      err => {
        this.setState({
          animating: false
        })
        console.error(err)
      }
    )
  }

  /**
   * 返回itemView
   */
  renderItemView ({item}) {
    return (
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.addr}>{item.officeAddr}</Text>
      </View>
    )
  }

  renderLoadingView () {
    return (
      <View style={styles.container}>
        <ActivityIndicator
            animating={this.state.animating}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
        </View>
    )
  }

  // FlatList分割组件
  sepa() {
    return (<View style={{width: 5, backgroundColor: 'red'}}></View>)
  }

  renderFlatListView () {
    return (
      <View>
        <FlatList
        ItemSeparatorComponent={this.sepa}
        data={this.state.flatListData}
        renderItem={this.renderItemView}
        />
      </View>
    )
  }

  render () {
      if (this.state.animating) {
        return this.renderLoadingView()
      } else {
        return this.renderFlatListView()
      }
  }
}

class TestSectionList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sectionListData: [
        {title: '河南省', data: ['郑州', '开封', '洛阳', '平顶山', '许昌', '...']},
        {title: '江苏省', data: ['南京', '无锡', '苏州', '徐州', '常州', '...']}
      ]
    }
  }

  render () {
    return (
      <SectionList
          sections={this.state.sectionListData}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
    )
  }
}

// type Props = {};
export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TestFlatList></TestFlatList>
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
  title: {
    padding: 10,
    fontSize: 25,
    height: 60,
  },
  addr: {
    paddingLeft: 10,
    fontSize: 18,
    height: 44,
    color: 'gray'
  }
  // sectionHeader: {
  //   paddingTop: 2,
  //   paddingLeft: 10,
  //   paddingRight: 10,
  //   paddingBottom: 2,
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   backgroundColor: 'rgba(247,247,247,1.0)',
  // },
  // item: {
  //   padding: 10,
  //   fontSize: 18,
  //   height: 44,
  // }
});
