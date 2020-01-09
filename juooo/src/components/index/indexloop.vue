<template>
  <div class="index_loop">
    <van-swipe  :autoplay="3000" indicator-color="white" >
      <van-swipe-item v-for="item of Loop_list" :key="item.show_name" class="index_loop_pic">
        <img :src=item.pic alt="Loop图">
      </van-swipe-item>
      
    </van-swipe>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'vant';
  Vue.use(Swipe).use(SwipeItem);

  export default {
    mounted() {
      this.getLoopPic()
      // console.log(this)
    },
    computed:{
      ...mapState('index', [
        'Loop_list'
      ])
      
    },
    methods:{
      ...mapActions('index',{
          getLoopPic(dispatch) {
            dispatch('Looplist')
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .index_loop
    width 100%
    height 1.68rem
    img 
      width 100%
      height 1.68rem
</style>