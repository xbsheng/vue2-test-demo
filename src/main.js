import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
console.log(`VUE_APP_PRODUCT: ${process.env.VUE_APP_PRODUCT}`)
new Vue({
  render: h => h(App)
}).$mount('#app')
