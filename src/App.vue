<template>
  <div id="app">
    <router-view></router-view>
    <FootNavBar v-show="$route.meta.showFooter"></FootNavBar>
  </div>
</template>

<script>
  import FootNavBar from './components/FootNavBar/FootNavBar'

  export default {
    components: {
      FootNavBar
    },
    name: 'App',
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
