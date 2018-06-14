import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import { Label, Checkbox, Stepper} from 'teaset'

import { observer } from 'mobx-react'

// 注意: 子组件必须监听
@observer
export default class CartFooter extends Component {
  render () {
    const { store } = this.props
    return (
      <View style={styles.container}>
        <Checkbox title='全选' checked={store.checkAll } onChange={(checked) => store.onCheckAll()}/>
        <Label text={`合计：${store.totalPrice}元`} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: 44
  }
})
