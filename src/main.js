import Vue from 'vue'
import axios from 'axios'
import App from './App'
import MuseUi from './muse-ui.config'

Vue.use(MuseUi)

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  beforeCreate() {
    console.log('>>>>>>')
  }
})
