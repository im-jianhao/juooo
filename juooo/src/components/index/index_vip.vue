<template>
  <section class="vip_block">
    <div class="vip_block_top">
      <div class="vip_block_top_left">
        <span class="vip_block_top_left1"></span>
        <span class="vip_block_top_left2">VIP+会员尊享权益</span>
      </div>
      <div class="vip_block_top_right">
        <span class="vip_block_top_right1">99/年</span>
        <span class="vip_block_top_right2">
          <van-icon name="arrow" size="0.08rem"/>
        </span>
      </div>
    </div>
    <div class="vip_block_content">
      <div class="vip_block_content_left">
        <h3 class="vip_block_content_left_top">
          <span>专属票价</span>
          <p></p>
          <span>
            <van-icon name="arrow" size="0.08rem"/>
          </span>
        </h3>
        <ul class="vip_block_content_left_content">
          <li v-for="item of Vip_list1" :key="item.schedular_id" v-if="item.schedular_id">
            <img :src=item.pic alt="">
            <div>
              <span class="fixed_price">¥&nbsp;{{ item.fixed_price }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="price">¥{{ item.price }}</span>
            </div>
            
          </li>
        </ul>
      </div>
      <div class="vip_block_content_right">
        <h3 class="vip_block_content_right_top">
          <span class="vip_block_content_right_top1">
            专享折扣
          </span>
          <span>
            <van-icon name="arrow" size="0.08rem"/>
          </span>
        </h3>
        <div class="vip_block_content_right_content" v-for="item of Vip_list2" :key="item.schedular_id">
          <img :src="item.pic" alt="">
            <span class="s1">{{ item.min_discount }}</span>
            &nbsp;
            <span class="s2">折</span>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import { Icon } from 'vant';

  export default {
    data () {
      return {
        arr:undefined,
        arr2:undefined
      }
    },
    async created() {
      this.getVipList()
      // try{
      //   this.arr = this.$store.state.index.Vip_list.allList.slice(0, 2)
      //   this.arr2 = this.$store.state.index.Vip_list.allList.slice(2,)
        
      // } catch {
      //   console.log('pass')
      // }
    },
    computed:{
      ...mapState('index',[
        'Vip_list',
        'Vip_list1',
        'Vip_list2'
      ])
    },
    methods:{
      ...mapActions('index',{
        getVipList(dispatch) {
          dispatch('getVipList');
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
@import '~assets/styles/border';
  .vip_block
    width 100%
    height 2.33975rem
    background pink 
    margin-bottom: 0.08rem
    .vip_block_top
      height .34125rem
      padding 0 .128rem
      background #000
      color #f0d1b0
      line-height .34125rem
      .vip_block_top_left
        height 100%
        float left
        .vip_block_top_left2
          font-weight 800
      .vip_block_top_right
        float right
        .vip_block_top_right1
          font-size 0.13rem
    .vip_block_content
      width 3.2rem
      height 1.9905rem
      padding 0 .128rem .128rem .128rem 
      background #f5f5f5
      display flex
      .vip_block_content_right::before
        content: ""
        display: block
        width: 1px
        height 1.24575rem
        background-color: #ebebeb
        position absolute
        left -0.05rem
        top .35rem
      .vip_block_content_right
        position relative
        margin 0!important
        .vip_block_content_right_content
          text-align center
          .s1 
            color: #ff6743
          .s2 
            font-size 0.1rem
          img 
            height 1.24575rem
            width .93763rem
      .vip_block_content_left
      .vip_block_content_right
        height 100%
        width 1.954rem
        margin-right .07253rem 
        .vip_block_content_left_content
          display flex
          li 
            margin-right .064rem
            display flex
            flex-direction column
            .fixed_price
              color: #ff6743
            .price 
              text-decoration: line-through
              font-size 0.1rem
            img 
              height 1.24575rem
              width .9045
        .vip_block_content_left_top
        .vip_block_content_right_top
          width 2rem
          height .35413rem
          padding-right .10667rem 
          display flex
          justify-content space-between
          align-items center
        .vip_block_content_right_top
          width .98rem
          padding-left .07253rem


</style>