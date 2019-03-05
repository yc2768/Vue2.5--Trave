<template>
  <div class="icons">
    <swiper >
      <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
              <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl" alt="">
                </div>
              <p class="icon-desc">{{item.desc}}</p>
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      iconList: [{
        id: '001',
        imgUrl: '../../../../static/img/3.png',
        desc: '景点'
      }, {
        id: '002',
        imgUrl: '../../../../static/img/4.png',
        desc: '景点'
      }, {
        id: '003',
        imgUrl: '../../../../static/img/5.png',
        desc: '景点'
      }, {
        id: '004',
        imgUrl: '../../../../static/img/6.png',
        desc: '景点'
      }, {
        id: '005',
        imgUrl: '../../../../static/img/7.png',
        desc: '景点'
      }, {
        id: '006',
        imgUrl: '../../../../static/img/8.png',
        desc: '景点'
      }, {
        id: '007',
        imgUrl: '../../../../static/img/9.png',
        desc: '景点'
      }, {
        id: '008',
        imgUrl: '../../../../static/img/10.png',
        desc: '景点'
      }, {
        id: '009',
        imgUrl: '../../../../static/img/10.png',
        desc: '景点'
      }]
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
     height:0
     padding-bottom: 50%
  .icon
    position: relative
    overflow : hidden
    float: left
    width: 25%
    height :0
    padding-bottom: 25%
  .icon-img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: .44rem
    box-sizing: border-box
    padding: .1rem
  .icon-img-content
    display: block
    margin: 0 auto
    height: 100%

  .icon-desc
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: .44rem
    line-height: .4rem
    text-align : center
    color: $darkTextColor
    ellipsis()
</style>
