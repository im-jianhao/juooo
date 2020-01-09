<template>
  <section class="Search_box">
    <div class="Search_header">
      <form action="/">
        <van-search
          placeholder="请输入搜索关键词"
          v-model="value"
          show-action
          @search="onSearch"
          @cancel="onCancel"
          shape="round"
          />
      </form>
    </div>
    <section class="Search_content">
      <div class="Search_history" v-show="show">
        <h3>历史搜索</h3>
        <ul>
          <li v-for="(item,index) in S_list" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="hot_search" >
        <h3>热门搜索</h3>
        <ul>
          <li v-for="(item,index) in hotSearch_list" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
import { mapState, mapActions } from 'vuex';

Vue.use(Search);
export default {
  data() {
    return {
      S_list:[],
      value:'',
      show:false
    }
  },
  created(){
    this.getlist()

  },
  methods:{
    onSearch() {
      if (this.value !== "") {
        if (this.S_list.length){
          for (let item of this.S_list) {
            if (item !== this.value) {
              this.S_list.push(this.value)
              console.log(this.S_list)
            }
          }
        } else {
          this.S_list.push(this.value)
        }
        
      }
      
    },
    onCancel() {
      this.$router.go(-1)
    },
    // setarr() {
    //   let str = localStorage.getItem()
    //   this.S_list = 
    // },
    ...mapActions('index',{
      getlist(dispatch) {
        dispatch("getlist")
      }
    })
  },
  computed:{
    ...mapState('index',[
      'hotSearch_list'
    ]),
    getarr() {

    }
  }
}
</script>

<style lang="stylus" scoped>
.Search_content
  padding 0 .128rem
  padding-top .22187rem



  .hot_search
    h3 
      font-size .1rem
    ul 
      display flex
      width 100%
      flex-wrap wrap
      margin-top .17067rem
      li 
        font-family: 'PingFang-SC-Medium';
        padding: 0 .2rem;
        height: .29863rem;
        line-height: .29863rem;
        font-size: 0.12rem;
        color: #232323;
        background-color: #f5f5f5;
        border-radius: 0.08rem;
        margin-right: 0.11093rem;
        margin-bottom: 0.11093rem;
</style>
