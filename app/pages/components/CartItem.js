import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {Button, Label, Checkbox, Stepper} from 'teaset'

import { observer } from 'mobx-react'

// 注意：这里子组件必须监听
@observer

export default class CartItem extends Component {

  render () {
    const { data } = this.props
    const { store } = this.props
    return (
      <View>
        <View style={styles.rowContainer}>
          <Checkbox title='' checked={data.checked} onChange={(checked) => store.onChecked(data.id)}/>
          <View style={{flex: 1}}>
            <Label style={{flex: 1}} text={data.name}/>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Label style={{flex: 1, color: '#f28006'}} text={`￥${data.price}`} />
              <Label style={{flex: 1, color: '#f28006'}} text={`小计:￥${data.price * data.buyNum}`} />
              <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                <Stepper value={data.buyNum} min={1} onChange={(value) => (data.buyNum - value) > 0 ? store.sub(data.id) : store.add(data.id)}/>
                <Button type='danger' title='删除' onPress={() => store.removeItem(data.id)} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.line}/>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    height:70,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  thumb: {
    marginRight: 10
  },
  line:{
    backgroundColor:'#eef0f3',
    height:1,
  },
})