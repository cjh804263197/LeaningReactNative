import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import CartState from '../mobx/CartState'
import { observer } from 'mobx-react'
// 引入自定义子组件
import CartItem from './components/CartItem'
import CartFooter from './components/CartFooter'

const store = new CartState()

@observer
export default class CartMobxDemo extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
      headerTitle: 'Mobx实现购物车'
  })

  render () {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          {store.list.map((item, i) => <CartItem data={item} key={i} store={store}/>)}
        </View>
        <CartFooter style={{flex: 1}} store={store}></CartFooter>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'white'
  },
})