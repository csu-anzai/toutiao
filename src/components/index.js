import layoutAside from './home/layout-aside.vue'
import layoutHeader from './home/layout-header.vue'
import breadCrumb from './common/bread-crumb.vue'
// 所有自定义组件的插件
export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside) // 注册左侧导航组件
    Vue.component('layout-header', layoutHeader) // 注册头部组价
    Vue.component('bread-crumb', breadCrumb) // 注册面包屑事件
  }
}
