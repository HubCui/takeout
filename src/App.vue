<!--  -->
<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
//  这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//  例如：import 《组件名称》 from '《组件路径》';
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  //  import引入的组件需要注入到对象中才能使用
  components: {
    FooterGuide
  },
  data () {
    //  这里存放数据
    return {}
  },
  //  监听属性 类似于data概念
  computed: {},
  //  监控data中的数据变化
  watch: {},
  //  方法集合
  methods: {}
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
