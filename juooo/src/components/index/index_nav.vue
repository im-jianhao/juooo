<template>
  <div class="index_nav_box">
    <div class="index_nav">
      <ul>
        <li v-for="item of Nav_list.classify_list" :key="item.id" class="index_nav_li">
          <img :src=item.pic alt="当航图">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="vip_ahead" v-for="item of Vip_list.priorList" :key="item.schedular_id">
      <div class="vip_ahead_top"> 
        <div class="vip_ahead_top_left">
          <span class="vip_ahead_top1">优先购票</span>
          <span class="vip_ahead_top2">VIP+会员尊享权益</span>
        </div>
        <div class="vip_ahead_top_right">
          <span class="vip_ahead_top3">99/元</span>
          <span class="vip_ahead_top4">
            <van-icon name="arrow" size="0.08rem"/>
          </span>
        </div>
        
      </div>
      <div class="vip_ahead_bottom">
        <div class="vip_ahead_bottom_left" >
          <img :src=item.pic alt="">
        </div>
        <div class="vip_ahead_bottom_right">
          <h3>{{item.schedular_name}}</h3>
          <p>{{item.city_name}}|{{item.venue_name}}</p>
          <p class="vip_ahead_bottom_right_list">{{item.pre_time}}</p>
          <span class="vip_ahead_bottom_right_list_t">开始</span>
          <span class="vip-ahead__list__lab">开售提醒</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import { Icon } from 'vant';

  export default {
    created() {
      this.getNavList()
      this.getVipList()
    },
    computed:{
      ...mapState('index',[
        'Nav_list',
        'Vip_list'
      ])
    },
    methods:{
      ...mapActions('index',{
        getNavList(dispatch) {
          dispatch('getNavList')
        },
        getVipList(dispatch) {
          dispatch('getVipList')
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
.index_nav_box
  // height 2.98rem
  width 100%
  padding 0.07rem 0.13rem 0
  margin-bottom .13653rem 
  .index_nav
    background #fff
    height 1.28rem
    width 100%
    margin-bottom 0.128rem 
    ul 
      height 100%
      width 100%
      display flex
      flex-wrap wrap
      li 
        width .58875rem
        height .68862rem
        width 20%
        display flex
        flex-direction column
        justify-content center
        align-items center
        img 
          height .43513rem
          width .43513rem
          display block
        span 
          display block
          height .152rem
          font-size 0.12rem
          margin-top .05rem
          color #232323
  .vip_ahead
    background hotpink 
    width 100%
    height 1.484rem
    margin-bottom 0.136rem 
    background-color rgba(255,252,245,0.5)
    border 1px solid rgba(213,163,112,0.3)
    .vip_ahead_top
      width 100%
      height .33125rem
      padding 0 .128rem
      display flex
      position relative
      line-height .33125rem
      border-bottom dashed 1px rgba(213,163,112,0.3)
      .vip_ahead_top_right 
        position absolute
        right 0
        .vip_ahead_top3
          font-size 0.12rem
          color #6b4218
        .vip_ahead_top4
          margin-right 0.1rem 
      .vip_ahead_top_left
        .vip_ahead_top1
          font-weight bold
          color #6b4218
          margin-right .04267rem
        .vip_ahead_top2
          font-size 0.12rem
          color #6b4218
      div 
        span
          display inline-block
    .vip_ahead_bottom
      width 100%
      height 1.1rem
      padding .128rem
      padding-bottom 0.10667rem 
      display flex
      .vip_ahead_bottom_left
        height .75938rem
        width .55462rem
        img 
          height .75938rem
          width .55462rem
      .vip_ahead_bottom_right
        width 1.9rem
        height .76rem
        padding-top .02133rem
        margin-left  .12800rem
        position relative
        h3 
          color #232323
          font-size 0.12rem
        p 
          margin-top 0.1rem 
          font-size 0.1rem
        .vip_ahead_bottom_right_list 
          color #ff6743!important
        .vip_ahead_bottom_right_list_t
          font-size 0.1rem
          position absolute
          left .7rem
          bottom -0.1rem
        .vip-ahead__list__lab
          font-size 0.1rem
          position absolute
          width .6485rem
          height .20475rem
          border-radius .20475rem
          text-align center
          line-height .20475rem
          border: solid 1px #ff6743
          color: #ff6743
          left 1.3rem
          bottom -0.12rem
</style>