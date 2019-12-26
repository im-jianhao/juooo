<template>
  <div class="theater-wrap">
    <div class="theater-head">
      <header class="head_nav">
        <h3 class="title text-single">剧院</h3>
      </header>
    </div>
    <div class="theater-body">
      <div class="theater-body_main">
        <div class="wrapper">
          <div class="content">
            <div class="theater-list">
              <ul class="theater-ul">
                <li
                  class="theater-li"
                  v-for="theatre in theatreList"
                  :key="theatre.id"
                >
                  <div class="theater-info-shows">
                    <div class="theater-info">
                      <a
                        :href="theatre.theatre_url"
                        class="theater-pic-name-count"
                      >
                        <div class="theater-pic-wrap">
                          <img :src="theatre.pic" class="theater-pic" />
                        </div>
                        <div class="theater-name-count-wrap">
                          <p class="theater-name">{{ theatre.name }}</p>
                          <p class="theater-count">
                            {{ theatre.count }}场在售演出
                          </p>
                        </div>
                      </a>
                      <a :href="theatre.show_list_url" class="theater-link"
                        ><img
                          src="https://m.juooo.com/static/img/more.2ce7873.png"
                          alt=""
                          class="theater-more-btn"
                      /></a>
                    </div>
                    <div class="theater-shows">
                      <div class="theater-show-wrap">
                        <div
                          class="swiper-container swiper-container-horizontal"
                        >
                          <div class="swiper-wrapper">
                            <div
                              class="swiper-slide"
                              v-for="showItem in theatre.showList"
                              :key="showItem.id"
                            >
                              <div class="theater-show-date">
                                <p class="show-date">
                                  {{ showItem.show_time }}
                                </p>
                                <span class="dot"></span>
                              </div>
                              <a class="theater-show-pic">
                                <img
                                  :src="showItem.pic"
                                  :alt="showItem.schedular_name"
                                  class="show-pic"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      theatreList: []
    };
  },
  async mounted() {
    const theatreData = await this.$axios.get("/theatre/index/getTheatreList", {
      params: {
        page: 1,
        version: "6.0.9",
        referer: 2
      }
    });

    this.theatreList = theatreData.data.data.theatre_list;

    await this.$nextTick();

    let bScroll = new BScroll(".wrapper", {});
    new BScroll(".swiper-container", {
      scrollX: true
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/styles/border';
.theater-wrap
  height: 100%;
  position: relative;
.head_nav
  position: fixed !important
  top: 0;
  width: 100%
  height: .43rem
  line-height: .43rem
  text-align: center;
  $border(0 0 1px 0,#ebebeb)
  background-color: #fefefe;
  z-index: 100;
  .title
    font-size: .18rem;
    font-weight: normal;
    color: #232323;
    padding: 0 .5rem;
.theater-body
  height: 100%;
  background-color: #fdfdfd;
  padding-top: .44rem;
  .wrapper
    height: 100%;
.theater-body_main
  height: 100%;
  padding-top: .12rem;
  overflow-y: auto;
.theater-list
  width: 3.45rem;
  margin: 0 auto;
  .theater-info-shows
    background-color: #fefefe;
    box-shadow: 0px 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,0.08);
    border-radius: .04rem;
    $border(1px 1px 1px 1px,#ebebeb)
    margin-bottom: .15rem;
    padding: .205rem .165rem .21rem;
    .theater-info
      display: flex;
      justify-content: space-between;
      align-items: center;
      .theater-pic-name-count
        display: flex;
        .theater-pic-wrap
          width: .5rem;
          height: .5rem;
          margin-right: .1rem;
          overflow: hidden;
          img
            width 100%
            height 100%
            border-radius .04rem
        .theater-name-count-wrap
          max-width 2.15rem
          .theater-name
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: .03rem 0 .05rem;
            font-size: .17rem;
            color: #232323;
            font-weight: bold;
          .theater-count
            color: #666666;
            font-size: .12rem;
      .theater-link
        display: block;
        padding: .1rem 0 .1rem .1rem;
        .theater-more-btn
          width: .14rem;
          height: .14rem;
    .theater-shows
      margin-top: .13rem;
.swiper-container
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
.swiper-wrapper
  // position: relative;
  // width: 100%;
  // height: 100%;
  // z-index: 1;
  // transition-property: transform;
  width max-content
  display: flex;
.swiper-slide
  flex-shrink: 0;
  width: 1.14rem;
  height: 100%;
  position: relative;
  .theater-show-date
    position: relative;
    width: 1.14rem;
    border-bottom: .02rem solid #ebebeb;
    border-radius: .01rem;
    padding-bottom: .14rem;
    margin-bottom: .17rem;
    .show-date
      color: #b3b3b3;
      font-size: .12rem;
      padding-right: .07rem;
      text-align: center;
      height: 0.125rem;
    .dot
      position: absolute;
      left: 50%;
      bottom: -0.045rem;
      display: inline-block;
      width: 0.07rem;
      height: 0.07rem;
      margin-left: -0.07rem;
      border-radius: 50%;
      background-color: #cccccc;
  .theater-show-pic
    display: block;
    width: 1.14rem;
    height: 1.46rem;
    line-height: 1.46rem;
    overflow: hidden;
    .show-pic
      width: 1.07rem;






















.text-single
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
</style>
