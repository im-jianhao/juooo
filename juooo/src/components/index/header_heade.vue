<template>
  <div class="home_header_box">
    <header class="header_heade" :class="{header_bg:Show}">
      <div class="heade_address" v-show="!Show">
        <van-icon name="location-o" />
        全国
      </div>
      <div class="heade_address heade_address_bg" v-show="Show">
        <van-icon name="location" />
        全国
      </div>
      <router-link to="/search/index" class="set_color">
        <div class="head_search " :class="{head_search_bg:Show}">
          <van-icon name="search" />
          <span :class="{a_color:Show}">
            搜索热门演出
          </span>
        </div>
      </router-link>
      <div class="heade_calendar" v-show="!Show">
        <van-icon name="notes-o" size="0.24rem"/>
      </div>
      <div class="heade_calendar" v-show="Show">
        <van-icon name="underway" size="0.24rem"/>
      </div>
    </header>
  </div>
</template>

<script>
import { Icon } from 'vant';
import { mapActions, mapState } from 'vuex';

  export default {
    created() {
    },
    methods:{
    },
    computed:{
      ...mapState('index',[
        'Show'
      ])
    }
  }
</script>

<style lang="stylus" scoped>
.home_header_box
  width 100%
  height .38rem
  position fixed
  top 0
  left 0
  z-index 10
  .header_heade
    height .38rem
    width 100%
    padding 0 .13rem
    color #fff
    display flex
    justify-content space-between
    align-items center
    .heade_address
      font-size .12rem
      width .5rem
      height .24rem
      display flex
      justify-content space-around
      align-items center
      padding-right 5px 
      font-weight 700
      border-radius .5rem
      background rgba(0,0,0,0.3)
      border 1px solid rgba(225,225,225,0.3)
    .head_search
      font-size .12rem
      width 1.8rem
      height .24rem
      display: flex;
      padding-left .1rem 
      align-items: center;
      border: 1px solid rgba(225,225,225,0.2);
      background-color: rgba(0,0,0,0.2);
      border-radius .24rem 
      span
        margin-left .05rem
    .heade_calendar
      width .24rem
      height .22rem
      color #000
.header_bg 
  background #fff


.heade_address_bg
  background #fff !important
  color #000 !important


.a_color 
  a
    color #000!important

.head_search_bg
  background-color #f5f5f5!important
  color #000 
  border-color: #ebebeb


.set_color
  color #fff
</style>