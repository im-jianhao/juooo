<template>
  <section class="index_show">
    <div class="index_show_item_content" v-for="item of Show_list" :key="item.schedular_id">
      <div class="index_show_item_content_n">
        <div class="index_show_item_content_img">
          <img :src=item.pic alt="图片">
        </div>
        <div class="index_show_item_content_text">
          <p class="index_show_item_content_text1">
            <strong>
              {{ item.start_show_time.split(" ") }} 
            </strong>
            <span></span>
          </p>
          <h3>
            {{ item.name }}
          </h3>
          <p class="index_show_item_content_text2">
            {{ item.city_name }}|{{ item.venue_name }}
          </p>
          <p class="index_show_item_content_text4">
            <span v-for="(desc, index) in item.support_desc" :key="index" class="lab">
              {{ desc }}
            </span>
          </p>
          <p class="index_show_item_content_text3">
            <strong>¥{{ item.min_price }}</strong>
            <span>起</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
  export default {
    computed:{
      ...mapState('index',[
        'Show_list'
      ])
    },
    methods:{
      ...mapActions('index',{
        getShowlist(dispatch) {
          dispatch('getShowlist')
        }
      })
    },
    created() {
      this.getShowlist()
    }
  }
</script>

<style lang="stylus" scoped>
  .index_show_item_content
    height 1.41925rem
    width 100%
    margin-top .1rem
    .index_show_item_content_n
      height 1.42rem
      width 100%
      padding .11947rem 0 .11947rem .128rem
      display flex
      // background pink
      .index_show_item_content_img
        height 100%
        width .85325rem
        $border(1px 1px 1px 1px)
        img 
          height 100%
          width 100%
      .index_show_item_content_text
        flex 1
        margin-left .128rem
        height 100%
        position relative
        .index_show_item_content_text1
          color #000
          span
            font-size 0.10rem
            letter-spacing: 1px
            color #fff
            margin 0 .05rem
        h3
          width 1.86363rem
          height .384rem
          font-size 0.13rem
          text-overflow ellipsis
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          overflow hidden
          color #000
        .index_show_item_content_text2
          display block
          width 1.79rem
          height .20475rem
          line-height .20475rem
          font-size 0.11rem
          color #000
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        .index_show_item_content_text3
          position absolute
          bottom 0
          rigth 1.48625rem
        .index_show_item_content_text4
        .index_show_item_content_text3
          strong 
            margin-right .05rem 
            color #ff6743
            font-size .13rem
            font-weight: normal
          span 
            font-size .08rem



  .lab 
    display: inline-block;
    margin-right: 0.05rem;
    border-radius: 0.24rem;
    padding: 0.00853rem 0.04267rem;
    color: #ff6743;
    font-size: 0.12rem;
    background-color: #fff1ef;
</style>