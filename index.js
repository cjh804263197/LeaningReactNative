import { AppRegistry } from 'react-native';
import App from './App';
import AV from 'leancloud-storage'

/**
 * 隐藏warn:isMounted(...) is deprecated in plain JavaScript React classes....信息
 */
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])


const APP_ID = '3KrsVtLdC61rvm4sYMpj6S4y-gzGzoHsz'
const APP_KEY = 'UEeEDxs7uKQgKko5CAybmBH3'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

AppRegistry.registerComponent('LeaningReactNative', () => App);
