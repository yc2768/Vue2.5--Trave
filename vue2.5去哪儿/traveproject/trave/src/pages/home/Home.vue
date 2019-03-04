<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>

</template>

<script>
// 将局部组件HomeHeader引入到Home中并注册使用
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
