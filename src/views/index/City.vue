<template>
  <div class="wrap">
    <div class="city" v-if="sortedCity">
      <header class="head_nav">
        <span class="head_icon back_icon" @click="$router.push('/')"></span>
        <h3 class="title text-single">城市选择</h3>
      </header>
      <div class="cityWrap">
        <section class="city-block">
          <div class="city-block__wrapper">
            <van-index-bar :index-list="sortedCityIndex" :z-index="11">
              <div class="city-block__con">
                <van-index-anchor index="定位" class="city-block__con__tip">
                  定位城市
                </van-index-anchor>
                <ul class="city-block__con__wrap">
                  <li
                    class="city-block__con__item location--item"
                    @click="handlePosition()"
                  >
                    {{ pos }}
                  </li>
                </ul>
              </div>
              <div class="city-block__con">
                <van-index-anchor index="热门" class="city-block__con__tip"
                  >热门城市</van-index-anchor
                >
                <ul class="city-block__con__wrap">
                  <li
                    class="city-block__con__item hots--item"
                    @click="storeCityData('全国', 0)"
                  >
                    全国
                  </li>
                  <li
                    class="city-block__con__item hots--item"
                    v-for="city in hotCity"
                    :key="city.id"
                    @click="storeCityData(city.name, city.id)"
                  >
                    {{ city.name }}
                  </li>
                </ul>
              </div>
              <section class="city-block__row">
                <div
                  class="city-block__row__con"
                  v-for="(cities, key) in sortedCity"
                  :key="cities.id"
                >
                  <van-index-anchor
                    :index="key"
                    class="city-block__row__con__letter"
                    >{{ key }}</van-index-anchor
                  >
                  <ul class="city-block__row__con__wrap">
                    <li
                      class="city-block__row__con__column"
                      v-for="city in cities.list"
                      :key="city.id"
                      @click="storeCityData(city.name, city.id)"
                    >
                      {{ city.name }}
                    </li>
                  </ul>
                </div>
              </section>
            </van-index-bar>
          </div>
        </section>
      </div>
    </div>
    <van-loading color="#1989fa" class="loading" v-else />
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Loading } from "vant";

import store from "store";

Vue.use(IndexBar)
  .use(IndexAnchor)
  .use(Loading);

export default {
  data() {
    return {
      hotCity: [],
      sortedCity: null,
      pos: "定位中..."
    };
  },

  created() {
    this.sortedCityIndexInit = ["定位", "热门"];
  },

  computed: {
    sortedCityIndex() {
      return [...this.sortedCityIndexInit, ...Object.keys(this.sortedCity)];
    }
  },

  async mounted() {
    const hotCityData = await this.$axios.get("/city/city/getHotCityList", {
      params: {
        version: "6.0.9",
        referer: 2
      }
    });

    this.hotCity = hotCityData.data.data.hot_city_List;

    const sortedCityData = await this.$axios.get(
      "/city/city/getSortedCityList",
      {
        params: {
          version: "6.0.9",
          referer: 2
        }
      }
    );

    this.sortedCity = sortedCityData.data.data;

    this.getLocation();
  },

  methods: {
    handlePosition() {
      this.getLocation();
    },
    // 使用地理定位
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.showPosition,
          this.showError
        );
      } else {
        this.pos = "Geolocation is not supported by this browser.";
      }
    },
    showPosition(position) {
      this.pos =
        "Latitude: " +
        position.coords.latitude +
        "<br />Longitude: " +
        position.coords.longitude;
    },
    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.pos = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          this.pos = "定位失败，点击重试";
          break;
        case error.TIMEOUT:
          this.pos = "The request to get user location timed out.";
          break;
        case error.UNKNOWN_ERROR:
          this.pos = "An unknown error occurred.";
          break;
      }
    },
    storeCityData(name, id) {
      store.set("cityKey", {
        id,
        name
      });

      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/styles/border';
.wrap
  width 100%
  height 100%
.loading
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  margin auto
  width .32rem
  height .32rem
.van-index-bar
  .van-index-bar__sidebar
    top 1.19rem
    right .1rem
.city
  width 100%
  height 100%
  background-color #f5f5f5
  .cityWrap
    height 100%
    padding-top .43rem
  .head_nav
    position: fixed !important
    top 0;
    width 100%
    height .44rem;
    line-height .44rem;
    text-align center;
    -webkit-box-sizing border-box;
    box-sizing border-box;
    $border(0 0 1px 0)
    background-color #fefefe;
    z-index 100;
    .back_icon
      left 0;
      background url(https://m.juooo.com/static/img/back_icon.754b906.png) no-repeat 0.15rem 50%;
      background-size 0.2rem 0.2rem;
    .head_icon
      position: absolute;
      top: 0;
      display: inline-block;
      width: .5rem;
      height: 100%;
  .city-block__con__item
    width: 1rem;
    height: .35rem;
    $border(1px 0)
    background-color: #fefefe;
    border-radius: .03rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 0.13rem;
    color: #232323;
    margin-right: .07rem;
  .city-block__con__wrap
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    .location--item
      width: auto;
      height: .34rem;
      min-width: 1rem;
      padding: 0 0.2rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    .title
      font-size: 0.18rem;
      font-weight: normal;
      color: #232323;
      padding: 0 .5rem;
    .text-single
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    .hots--item
      margin-bottom: .07rem;
  .city-block
    width: 100%;
    height: 100%;
    overflow: scroll;
    >div
      height 100%
      .city-block__con
        padding 0.13rem 0.25em 0 0.25rem
  .city-block__row__con__wrap
    padding: 0 .425rem 0 .15rem;
    background-color: #fefefe;
  .city-block__row__con__column
    height: .5rem;
    display: flex;
    align-items: center;
    font-size: .13rem;
    color: #232323;
    $border(0 0 1px 0)
</style>
