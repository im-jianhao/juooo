<template>
  <section class="index_tour">
    <div class="index_tour_box">
      <div class="index_tour_box_top">
        <h3 class="index_tour_box_top_title">巡回演出</h3>
        <div class="index_tour_box_top__arrow">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="index_tour_lib">
        <div class="swiper-container swiper_box">
          <ul class="swiper-wrapper">
            <li v-for="(item ,index) in Tour_list" :key="item.show_name" class="swiper-slide" :class="{selected:s == index}">
              <img :src=item.pic alt="图片">
              <h3>{{ item.show_name }}</h3>
              <p>{{ item.schedular_num }}场巡演</p>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
  import { Icon } from 'vant';
  import { mapState, mapActions } from 'vuex';
  import Swiper from 'swiper' ; 
  import '../../../node_modules/swiper/css/swiper.css'
  export default {
    data(){
      return {
        s:0
      }
    },
    mounted() {
      this.getTourlist();
      this.useSwiper()
    },
    computed:{
      ...mapState('index',[
        'Tour_list'
      ])
    },
    methods:{
      ...mapActions('index',{
        getTourlist(dispatch) {
          dispatch('getTourlist')
        }
      }),
      useSwiper () {
        let that = this
        new Swiper('.swiper-container', {
          paginationClickable: true,
          spaceBetween: 20,
          autoHeight: true,
          setWrapperSize :true,
          observer: true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,
          on: {
            slideChangeTransitionStart: function(){
              that.s = this.activeIndex;
            },
          },
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .index_tour_box
    width 100%
    height 2.3rem
    background-color: #f5f5f5;
    padding-top: 0.16rem;
    padding-bottom: 0.1rem;
    .index_tour_box_top
      display flex
      justify-content space-between
      .index_tour_box_top_title 
        margin-left .128rem
        font-size .16rem
        color #232323
      .index_tour_box_top__arrow
        margin-right .08533rem 
    .index_tour_lib
      height 1.72012rem
      overflow hidden
      margin-top .1rem 
      position relative
      .swiper_box
        width 2.08rem 
        height 1.19463rem
        position absolute
        overflow visible
        margin 0
        left .50rem
        ul 
          display flex
          position absolute
          .swiper-slide
            margin-right 0.2rem
            width 2.09063rem !important 
            height 1.07512rem
            padding-top 0.1rem 
            transition all 0.3s
            img 
              width 100%
              height 100%
            h3 
              display block
              font-size 0.14rem
              color #232323
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              width 2.09063rem
              text-align center
            p 
              text-align center
              font-size 0.1rem









.selected
  height 1.19463rem !important 
  padding-top 0 !important
  transition all 0.3s



</style>