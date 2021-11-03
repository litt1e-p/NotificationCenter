import Vue from 'vue'

Vue.config.productionTip = false

Vue.prototype.$post = function (name, userInfo) {
  this.$emit(name, userInfo)
}
Vue.prototype.$addObserver = function (name, cb) {
  this.$on(name, cb)
}
Vue.prototype.$removeObserver = function (name, cb) {
  this.$off(name, cb)
}
export var NotificationCenter = new Vue()
