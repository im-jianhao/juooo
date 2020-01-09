<template>
  <div class="home" ref="index">
    <div class="index_box">
      <index-content />
      <div class="Log" v-show="loading">
        <van-loading color="#1989fa" />
      </div>
    </div>
    <Header />
    <div class="free">
      <img src="https://image.juooo.com/group1/M00/03/59/rAoKmV3nZ2qAXViWAAAWlOZ5JDk258.png" alt="">
    </div>
    <Footer />
    
  </div>

</template>

<script>
import Header from '../../components/index/header_heade'
import Footer from '../../components/publicVue/footer'

import IndexContent from '../../components/index/indexcontent'
import BScroll from 'better-scroll'
import { mapActions } from 'vuex'
import Vue from 'vue';
import { Loading } from 'vant';

Vue.use(Loading);
export default {
  data () {
    return {
      count:2,
      loading: false
    }
  },
  name: 'home',
  components: {
    Header,
    IndexContent,
    Footer

  },
  mounted() {
    const that  = this
    this.$nextTick(() => {
      //$refs绑定元素
      if(!this.scroll1){
        this.scroll1 = new BScroll(this.$refs.index, {
        //开启点击事件 默认为false
          click:true,
          pullUpLoad:{
            threshold: 50
          }
        })
      // console.log(this.scroll)
      }else if(!this.$refs.index){
          return
      }
      else{
          this.scroll1.refresh()
      }
      this.scroll1.on('pullingUp', async() => {
        // console.log('上拉')
        that.loading = true
        await that.getShowmore()
        that.count++
        // that.loading = false
        this.scroll1.finishPullUp();
      })
      this.scroll1.on('scroll', (pos) =>{
        // var tops = "10px";
        // 使用abs绝对值（否则 pos.y拿到值是负数）
        this.scrollY = Math.abs(Math.round(pos.y));
        //判断滑动距离大于"商品介绍"元素时, 吸顶title,否则隐藏
        if(this.scrollY >= 2) {
            that.loading = true;
            this.getShow()
        }else {
            that.loading = false;
            this.getShow()
        }

      })
    })
  },
  methods:{
    ...mapActions('index', {
      getShowmore(dispatch) {
        dispatch('getShowmore', this.count)
      },
      getShow(dispatch) {
        dispatch('getShow', this.loading)
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  .home
    height 5.68rem
    .free
      position fixed
      width .529rem
      height .529rem
      top 4.511rem
      right .11093rem
      bottom .64rem
      left 2.56013rem
      z-index 1
      img 
        height 100%
        width 100%
    .Log
      z-index 10
      display flex
      justify-content center
</style>