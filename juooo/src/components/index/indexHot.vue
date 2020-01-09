<template>
  <div class="hot_box">
    <section class="hot">
      <div class="hot_lib">
        <h3 class="hot_lib_title">热门演出</h3>
        <div class="hot-block__lab__arrow">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="swiper-wrapper" ref="swiper">
        <ul>
          <li v-for="item of Hot_list" :key="item.show_name">
            <img :src=item.pic alt="">
            <h3>{{ item.show_name }}</h3>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import { Icon } from 'vant';
  import { mapState, mapActions } from 'vuex';
  import BScroll from 'better-scroll'
  

  export default {
    mounted() {
      this.getHotlist();
      this.$nextTick(() => {
        //$refs绑定元素
        if(!this.scroll){

            this.scroll = new BScroll(this.$refs.swiper, {
            scrollX: true,
            //开启点击事件 默认为false
            click:true
        })
        // console.log(this.scroll)
        }else if(!this.$refs.swiper){
            return
        }
        else{
            this.scroll.refresh()
        }
      })
    },
    computed:{
      ...mapState('index',[
        'Hot_list'
      ])
    },
    methods:{
      ...mapActions('index',{
        getHotlist(dispatch) {
          dispatch('getHotlist')
        }
      }),
    }
  }
</script>

<style lang="stylus" scoped>
.hot
  height 2.3rem
  width 100%
  padding-top: .128rem;
  padding-left: .128rem;
  padding-bottom: .27307rem;
  .hot_lib
    display flex
    justify-content space-between
    .hot_lib_title
      font-size .16rem
      color #232323
    .hot-block__lab__arrow
      margin-right .08533rem 
  .swiper-wrapper
    height 1.72012rem
    position relative
    overflow hidden
    margin-top .1rem 
    ul 
      display flex
      position absolute
      li
        margin-right 0.1rem 
        img 
          height 1.24575rem
          width .91rem
        h3 
          width .91rem
          height .352rem
          margin-top .1024rem
          font-size .14rem
          line-height 0.18rem
          text-overflow ellipsis
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          overflow hidden
          color #232323
          font-weight 700
</style>