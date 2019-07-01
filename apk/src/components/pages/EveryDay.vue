<template>
<!-- 每日推荐页面 -->
<div class="content">
    <div class="title_lang">

    </div>
    <div class="title">

    </div>
    <div class="list_area">

    </div>
</div>
</template>

<script>
export default {
  name: 'EveryDay',
  data () {
    return {
      everyData:[],//每日推荐歌单
    }
  },
  created() {
      this.getEveryData()
  },
  mounted() {
      
  },
  computed: {
      
  },
  methods: {
    getEveryData:function(){
        // https://v1.itooi.cn/netease/songList/hot   热门歌单
        // this.$axios({
        //     url: '/netease/songList/hot',
        //     method: 'get',
        // //params参数必写 , 如果没有参数传{}也可以
        //     data:{ 
        //     }
        // })
        // .then((res)=>{
        //     // this.bannerItem=res.data.data;
        //     console.log(res.data.data)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })


        // /netease/songList/highQuality  精品歌单
        // this.$axios({
        //     url: '/netease/songList/highQuality',
        //     method: 'get',
        // //params参数必写 , 如果没有参数传{}也可以
        //     data:{ 
        //     }
        // })
        // .then((res)=>{
        //     // this.bannerItem=res.data.data;
        //     console.log(res.data.data)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })


        // https://v1.itooi.cn/netease/song/newest 最新音乐
        this.$axios({
            url: '/netease/song/newest',
            method: 'get',
        //params参数必写 , 如果没有参数传{}也可以
            data:{ 
            }
        })
        .then((res)=>{
            // this.bannerItem=res.data.data;
            console.log(res.data.data);
            this.everyData=res.data.data;
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content{
  width: 10.8rem;
  height: 100%;
  background: #cecece;
  margin: auto;
  .title_lang{
    width: 10.8rem;
    height: 6.4rem;
    margin: auto;
    display: none;
    background: url(../../../static/imgs/true5.png) no-repeat;
    background-size: 100% 100%;
  }
  .title{
    width: 10.8rem;
    height: 3.54rem;
    margin: auto;
    // display: none;
    background: url(../../../static/imgs/true4.png) no-repeat center center;
  }
  .list_area{
    width: 10.8rem;
    min-height: 6rem;
    background: #fff;
    border-radius: 0.6rem 0.6rem 0 0;
    margin: auto;
    position:relative;
    top: -1rem;
  }
}
</style>
