export default {
  namespaced: true,
  state:{
    Loop_list:[],
    Nav_list:[],
    Vip_list:[],
    Vip_list1:[],
    Vip_list2:[],
    Hot_list:[],
    Tour_list:[],
    Floor_list:[],
    color_list:['rgb(201, 164, 168','rgb(186, 173, 154)','rgb(61, 72, 80)','rgb(220, 216, 216)','rgb(101, 131, 146)','rgb(169, 156, 175)'],
    Show_list:[],
    showmore:[],
    Show:undefined,
    hotSearch_list:[]
  },
  mutations:{
    Looplist(state,Loop_list) {
      state.Loop_list = Loop_list
    },
    getNavList(state, Nav_list) {
      state.Nav_list = Nav_list
    },
    getVipList(state, Vip_list) {
      state.Vip_list = Vip_list
    },
    getVipList1(state, Vip_list1) {
      state.Vip_list1 = Vip_list1
    },
    getVipList2(state, Vip_list2) {
      state.Vip_list2 = Vip_list2
    },
    getHotlist(state, Hot_list) {
      state.Hot_list = Hot_list
    },
    getTourlist(state, Tour_list) {
      state.Tour_list = Tour_list
    },
    getFloorlist(state, Floor_list) {
      // for (let item in Floor_list) {
      //   let index = Floor_list.indexOf(item)

      // }
      state.Floor_list = Floor_list
      // console.log(...state.Floor_list)
    },
    getShowlist(state, Show_list) {
      state.Show_list = Show_list
    },
    getShowmore(state, showmore) {
      state.Show_list = state.Show_list.concat(showmore)
      // state.Show_list = [...state.Show_list,...showmore] 
    },
    getShow(state,loading){
      state.Show = loading
    },
    getlist(state,hotSearch_list) {
      state.hotSearch_list = hotSearch_list
    }
  },
  actions:{
    async Looplist(context) {
      const result = await this.$axios.get('/home/index/getTourRecommendList',{
        params:{
          city_id: 0,
          version: '6.0.9',
          referer: 2,
        }
        
      })
      context.commit('Looplist',result.data.data.tour_show_list)
    },
    async getNavList(context) {
      const result = await this.$axios.get('/home/index/getClassifyHome',{
        params:{
          city_id: 0,
          abbreviation: '',
          version: '6.0.9',
          referer: 2
        }
        
      })
      context.commit('getNavList',result.data.data)
    },
    async getVipList(context) {
      const result = await this.$axios.get('/vip/index/getVipHomeSchedular',{
        params:{
          version: '6.0.9',
          referer: 2
        }
        
      })
      context.commit('getVipList',result.data.data)
      context.commit('getVipList1',result.data.data.allList.slice(0, 2))
      // console.log(result.data.data.allList)
      context.commit('getVipList2',result.data.data.allList.slice(2,))
    },
    async getHotlist(context) {
      const result = await this.$axios.get('/home/index/getHotsRecommendList',{
        params:{
          city_id: 0,
          version: '6.0.9',
          referer: 2
        }
        
      })
      context.commit('getHotlist',result.data.data.hots_show_list.slice(0,10))
      
    },
    async getTourlist(context) {
      const result = await this.$axios.get('/home/index/getTourRecommendList',{
        params:{
          city_id: 0,
          version: '6.0.9',
          referer: 2
        }
        
      })
      context.commit('getTourlist',result.data.data.tour_show_list.slice(0,7))
    },
    async getFloorlist(context) {
      const result = await this.$axios.get('/home/index/getFloorShow',{
        params:{
          city_id: 0,
          version: '6.0.9',
          referer: 2
        }
        
      })
      context.commit('getFloorlist',result.data.data)
      // console.log(context)
      // console.log({
      //   result.data.data,
      //   // color:rgb(Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255))
      //   // color:red

      // })
      // *************************************************
      // for (let item of result.data.data) {
      //   let index = result.data.data.indexOf(item)
      //   console.log({
      //     ...item,
      //     color:this.state.index.color_list[index]
      //   })
      //   // console.log(this.state.color_list[1])
      //   // console.log(this.state.index.color_list[index])
      // }
      
    },
    async getShowlist(context) {
      const result = await this.$axios.get('/Show/Search/getShowList',{
        params:{
          city_id: 0,
          version: '6.0.9',
          referer: 2,
          page: 1
        }
        
      })
      context.commit('getShowlist',result.data.data.list)
      // console.log(result.data.data.list)
    },
    async getShowmore(context,count) {
      const result = await this.$axios.get('/Show/Search/getShowList',{
        params:{
          city_id: 0,
          version: '6.0.9',
          referer: 2,
          page: count
        }
        
      })
      context.commit('getShowmore',result.data.data.list)
      // console.log(result.data.data)
      // console.log(this)
      // console.log(this.state.index.Show_list)
    },
    getShow(context, loading) {
      context.commit('getShow', loading)
    },
    async getlist(context,count) {
      const result = await this.$axios.get('/Show/Search/getHotWord',{
        params:{
          version: '6.0.9',
          referer: 2,
        }
        
      })
      context.commit('getlist',result.data.data)
      // console.log(result.data.data)
      // console.log(this)
      // console.log(this.state.index.Show_list)
    },
  }
}