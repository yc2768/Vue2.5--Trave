<template>
  <div>
    <home-header></home-header>
  </div>

</template>

<script>
// 将局部组件HomeHeader引入到Home中并注册使用
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style scoped>

</style>
