<template>
  <van-tabbar v-model="active" class="s1">
    <router-link to="/">
      <van-tabbar-item icon="home-o">
        首页
      </van-tabbar-item>
    </router-link>
    <router-link to="/theatre/theatreList">
      <van-tabbar-item icon="search">
      剧院
      </van-tabbar-item>
    </router-link>
    <router-link to="/eticket/list">
      <van-tabbar-item icon="friends-o">
      票夹
      </van-tabbar-item>
    </router-link>
    <router-link to="/myjuooo/myjuooo">
      <van-tabbar-item icon="setting-o">
        个人
      </van-tabbar-item>
    </router-link>
  </van-tabbar>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
export default {
data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  .s1
    position fixed
    bottom 0
    display flex
    justify-content space-around
    align-items center
</style>