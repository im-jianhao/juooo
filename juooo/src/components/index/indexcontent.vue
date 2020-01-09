<template>
  <section class="index_content">
    <index-loop />
    <index-nav />
    <Hot />
    <index-tour />
    <index-vip />
    <index-floor />
    <index-show />

  </section>
</template>

<script>
import IndexLoop from './indexloop';
import IndexNav from './index_nav';
import Hot from './indexHot';
import IndexTour from './indextour';
import IndexVip from './index_vip';
import IndexFloor from './index_floor';
import IndexShow from './index_show';

  export default {
    components:{
      IndexLoop,
      IndexNav,
      Hot,
      IndexTour,
      IndexVip,
      IndexFloor,
      IndexShow,
    }
  }
</script>

<style lang="stylus" scoped>
  .index_content
    height 100%
    
</style>