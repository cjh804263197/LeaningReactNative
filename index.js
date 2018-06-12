import { AppRegistry } from 'react-native';
import App from './App';
import AV from 'leancloud-storage'
const APP_ID = '3KrsVtLdC61rvm4sYMpj6S4y-gzGzoHsz'
const APP_KEY = 'UEeEDxs7uKQgKko5CAybmBH3'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

AppRegistry.registerComponent('LeaningReactNative', () => App);
