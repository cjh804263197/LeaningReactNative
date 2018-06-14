import {
  observable,
  computed,
  autorun,
  action
} from 'mobx'

// 定义数据源
const data = [
  {
    id: 100,
    name: "i7 7700k",
    type: "数码类产品",
    description: "CPU",
    price: 2400,
    buyNum: 1,
  },
  {
    id: 101,
    name: "R7 1800X",
    type: "数码类产品",
    description: "CPU",
    price: 3999,
    buyNum: 2,
  },
  {
    id: 102,
    name: "GTX1080TI",
    type: "数码类产品",
    description: "显卡",
    price: 5999,
    buyNum: 1,
  },
]

const dataList = data.map((item) => {
  return {...item, checked: true}
})

export default class CartState {
  // 数据源
  @observable list = dataList
  // 是否全选
  @observable checkAll = true

  // 删除操作
  @action removeItem (id) {
    this.list.forEach((item, i) => {
      if (item.id === id) {
        this.list.splice(i, 1)
      }
    })
  }

  // 增加数量操作
  @action add (id) {
    this.list.forEach(item => item.id === id && item.buyNum++)
  }

  // 减少数量操作
  @action sub (id) {
    this.list.forEach(item => (item.id === id && item.buyNum > 0) && item.buyNum--)
  }

  // 勾选操作
  @action onChecked (id) {
    // 改变所勾选项的checked状态
    this.list.forEach(item => {
      if (item.id === id) {
        item.checked = !item.checked
        item.checked ? null : this.checkedAll = false
      }
    })
    // 若所有项的checked都为true,则将this.checkAll赋值为true
    this.checkAll = this.list.some(item => item.checked === false) ? false : true
  }

  // 勾选全选
  @action onCheckAll () {
    this.checkAll = !this.checkAll
    // this.checkAll ? this.list.forEach(item => item.checked = true) : this.list.forEach(item => item.checked = false)
    //上一句可优化为,根据全选的状态将所有项的checked都置为这个状态
    this.list.forEach(item => item.checked = this.checkAll)
  }

  // 计算总价格
  @computed get totalPrice () {
    let total = 0
    this.list.forEach(item => {
      if (item.checked) {
        total += item.buyNum * item.price
      }
    })
    return total
  }

}