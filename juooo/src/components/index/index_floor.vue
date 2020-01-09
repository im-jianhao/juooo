<template>
  <section class="index_floor">
    <div class="index_floor_box">
      <div class="index_floor_item_box" v-for="(item, i) in Floor_list" :key="item.cat_id">
        <div class="index_floor_item_top">
          <div class="index_floor_item" > 
            <h3>{{ item.title }}</h3>
          </div>
          <div>
            <van-icon name="arrow" size="0.08rem"/>
          </div>
        </div>
        <div class="index_floor_item_content">
          <div class="index_floor_item_content_n" :style="{background:color_list[i]}">
            <div class="index_floor_item_content_img">
              <img :src=item.list[0].pic alt="">
            </div>
            <div class="index_floor_item_content_text">
              <p class="index_floor_item_content_text1">
                <strong>{{item.list[0].display_show_time.split(' ')[0]}}</strong>
                <span>{{ item.list[0].week }} {{ item.list[0].display_show_time.split(' ')[1]}}</span>
              </p>
              <h3>{{ item.list[0].schedular_name }}</h3>
              <p class="index_floor_item_content_text2">{{ item.list[0].city_name }} | {{ item.list[0].venue_name }}</p>
            </div>
          </div>
        </div>
        <div class="index_floor_item_foot" ref="swiper1">
          <van-swipe :loop="false" :show-indicators="false" :width="95" :duration="300">
            <van-swipe-item v-for="list of item.list.slice(1,)" :key="list.sche_id">
              <img :src=list.pic alt="">
              <h3>{{ list.schedular_name }}</h3>
              <strong>¥{{list.low_price.split('.')[0]}}</strong>
              <span>起</span>
            </van-swipe-item>
            
          </van-swipe>
        </div>
      </div>
      
    </div>

  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import { Icon } from 'vant';
  // import BScroll from 'better-scroll'
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'vant';

  Vue.use(Swipe).use(SwipeItem);
  // import Swiper from 'swiper' ; 
  // import '../../../node_modules/swiper/css/swiper.css'
  export default {
    computed:{
      ...mapState('index', [
        'Floor_list',
        'color_list'
      ])
    },
    methods:{
      ...mapActions('index', {
        getFloorlist(dispatch) {
          dispatch('getFloorlist')
        },

      }),
    },
  
    created () {
      this.getFloorlist();
      
    }
  }
</script>

<style lang="stylus" scoped>
@import '~assets/styles/border';
.index_floor_item_box
  width 100%
  height 4rem
  padding-bottom .256rem 
  .index_floor_item_top
    height .19625rem
    width 100%
    display flex
    justify-content space-between
    padding 0 .128rem
    .index_floor_item
      color #232323
  .index_floor_item_content
    height 1.41925rem
    width 100%
    margin-top .128rem
    .index_floor_item_content_n
      height 1.42rem
      width 100%
      padding .11947rem 0 .11947rem .128rem
      display flex
      // background pink
      .index_floor_item_content_img
        height 100%
        width .85325rem
        $border(1px 1px 1px 1px)
        img 
          height 100%
          width 100%
      .index_floor_item_content_text
        flex 1
        margin-left .128rem
        height 100%
        padding-top .13653rem 
        .index_floor_item_content_text1
          color #fff
          span
            font-size 0.10rem
            letter-spacing: 1px
            color #fff
            margin 0 .05rem
        h3
          width 1.86363rem
          height .384rem
          text-overflow ellipsis
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          overflow hidden
          margin-top .08533rem
          color #fff
        .index_floor_item_content_text2
          display block
          width 1.79rem
          height .20475rem
          margin-top .08533rem
          line-height .20475rem
          font-size 0.11rem
          color #fff
  .index_floor_item_foot
    height 2rem
    width 100%
    padding .128rem 0 0 .128rem
    
</style>