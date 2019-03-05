<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}}</p>
          <p class="item-desc">{{item.desc}}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: '../../../../static/img/3.png',
        title: '海洋馆',
        desc: '浪漫的海洋馆'
      }, {
        id: '002',
        imgUrl: '../../../../static/img/4.png',
        title: '海洋馆',
        desc: '浪漫的海洋馆'
      }, {
        id: '003',
        imgUrl: '../../../../static/img/5.png',
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

  .item
    overflow: hidden
    display: flex
    height: 1.9rem

  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem

  .item-info
    flex: 1
    padding: .1rem

  .item-title
    line-height: .54rem
    font-size: .32rem

  .item-desc
    line-height:, 4rem
    color: #ccc

  .item-button
    line-height: .44rem
    margin-top: .16rem
    background: #ff9300
    padding: 0 .2rem
    border-radius: .06rem
    color: #fff

</style>
