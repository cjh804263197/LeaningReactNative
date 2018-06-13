import MainDraw from './DrawerNavigator'
import Login from './pages/Login'
import About from './pages/About'
import Help from './pages/Help'

/*
    --- 路由配置 ---

   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。
*/
const RouteConfig = {
  MainDraw: {
    screen: MainDraw,
    navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})// 此处设置了, 会覆盖组件内的`static navigationOptions`设置. 具体参数详见下文 
  },
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})// 此处设置了, 会覆盖组件内的`static navigationOptions`设置. 具体参数详见下文 
  },
  About: {
    screen: About, // 必要的参数,其余都是按需添加
    path: 'app/About', // 使用url导航时用到, 如 web app 和 Deep Linking
  },
  Help: Help // 简写，screen可以省略
}

export default RouteConfig