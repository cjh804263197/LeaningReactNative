import {
  observable,
  computed,
  autorun,
  action
} from 'mobx'

class AppState {

  @observable timer = 0

  // 注意这里不能调用super(props),否则报错
  constructor (props) {
    setInterval(() => {
      this.timerIncreat(this.timer)
    }, 1000)
  }

  @action timerIncreat (time) {
    this.timer = time += 1
  }

  // 重置计数器
  @action resetTimer () {
    this.timer = 0
  }
}

export default AppState