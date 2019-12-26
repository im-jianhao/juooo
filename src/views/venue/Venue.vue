<template>
  <div class="wrap">
    <header class="navbar">
      <div class="navbar-inner navbar-on-center">
        <van-icon name="arrow-left" @click="routerBack"/>
        <div class="center">
          场馆地址
        </div>
        <van-icon name="ellipsis" @click="overlayShow = true" />
        <van-overlay :show="overlayShow" @click="overlayShow = false">
          <div class="popover-content" @click.stop>
            <ul class="list-block">
              <li class="list-item">
                <a class="menu-link" href="https://m.juooo.com/">
                  <van-icon name="home-o" />
                  <span class="menu-title">首页</span>
                </a>
              </li>
              <li class="list-item">
                <a class="menu-link" href="https://m.juooo.com/myjuooo/myjuooo">
                  <van-icon name="contact" />
                  <span class="menu-title">我的聚橙</span>
                </a>
              </li>
            </ul>
          </div>
        </van-overlay>
      </div>
    </header>

    <!-- 地图展示 -->
    <div class="main pages">
      <div class="maps_info">
        <div id="mapContent" class="map-wrapper">
          <baidu-map
            class="bm-view"
            ak="sqsfMKjIqadnQgEMEEl6YZmeYnWea9Vq"
            :center="center"
            :zoom="zoom"
            @ready="handler"
            :scroll-wheel-zoom="true"
          >
            <bm-overlay pane="labelPane" class="sample" @draw="draw">
              <div>{{ this.$route.params.venueName }}</div>
              <div>{{ this.$route.params.venueAddress }}</div>
            </bm-overlay>
          </baidu-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import bmOverlay from "vue-baidu-map/components/overlays/Overlay.vue";

import Vue from "vue";
import { Icon, Overlay } from "vant";

Vue.use(Icon).use(Overlay);
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      overlayShow: false
    };
  },

  components: {
    BaiduMap,
    bmOverlay
  },

  created() {},

  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      let tempArr = this.$route.params.venueCoordinate.split(",");

      this.center.lng = tempArr[0];
      this.center.lat = tempArr[1];
      this.zoom = 15;
    },

    draw({ el, BMap, map }) {
      const pixel = map.pointToOverlayPixel(
        new BMap.Point(this.center.lng, this.center.lat)
      );
      el.style.left = pixel.x - 140 + "px";
      el.style.top = pixel.y - 80 + "px";
    },

    routerBack(){
      this.$router.back()
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/styles/border';
.wrap
  height 100%
a
  color #212121
.navbar
  position: absolute;
  z-index: 500;
  left: 0;
  top: 0;
  $border(0 0 1px 0,#e7e7e7)
  width: 100%;
  height: .5rem;
  font-size: .24rem;
  color: #212121;
  background-color: #fdfdfd;
  .navbar-inner
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 .14rem 0 .14rem;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  .center
    display: flex;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    font-size:  0.19rem;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-shrink: 10;
    align-items: center;
    display: block;
    width: 85%;
.pages
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
.maps_info
  height 100%
.map-wrapper
  width: 100%;
  height: 100%;
  $border(1px 1px 1px 1px,#EEEEEE)
  overflow: hidden;
  position: relative;
  z-index: 0;
  background-color: #F3F1EC;
  color:  #000000;
  text-align: left;
.bm-view
  width: 100%;
  height: 100%;
.popover-content
  position: absolute;
  right: 0.06rem;
  top: 0.45rem;
  border-radius: 0.04rem;
  width: 1.55rem;
  font-size: 0.16rem;
  color: #212121;
  background-color: #fff;
.list-item
  padding: 0 0.2rem;
  $border(0 0 1px 0,#f2f2f2)
  cursor: pointer;
.menu-link
  display: flex;
  align-items: center;
  height: .5rem;
.menu-title
  margin-left .1rem
.sample
  width: 2.5rem;
  height: .85rem;
  line-height: .18rem;
  background: rgba(0,0,0,0.5);
  overflow: hidden;
  box-shadow: 0 0 5px #000;
  color: #fff;
  text-align: center;
  padding: .1rem;
  position: absolute;
  display flex
  flex-direction: column;
  justify-content: center;
</style>
