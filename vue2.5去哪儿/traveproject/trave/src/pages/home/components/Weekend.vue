<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}}</p>
          <p class="item-desc">{{item.desc}}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: '../../../../static/img/1.jpg',
        title: '海洋馆',
        desc: '浪漫的海洋馆'
      }, {
        id: '002',
        imgUrl: '../../../../static/img/1.jpg',
        title: '海洋馆',
        desc: '浪漫的海洋馆'
      }, {
        id: '003',
        imgUrl: '../../../../static/img/2.jpg',
        title: '海洋馆',
        desc: '浪漫的海洋馆'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow :hidden
    height:0
    padding-bottom :33.9%
  .item-img
    width: 100%
  .item-info
    padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height:, 4rem
    color: #ccc
    ellipsis()
</style>
