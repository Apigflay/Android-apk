<template>
<!-- 每日推荐页面 -->
<div class="content">
    <div class="title_lang">

    </div>
    <div class="title">

    </div>
    <div class="list_area">
        <div class="per" v-for="(item,index) in everyData" :key="index" :id="item.id" @click="goSinging(item.id)">
            <!-- <img :src="item.song.artists[0].img1v1Url" alt=""> -->
           
            {{item.name}}
            <!-- {{item.id}} -->
            {{item.song.artists[0].name}}
            <!-- {{item.song.artists[0].img1v1Url}} -->
        </div>
    </div>
    <audio :src="audioData" autoplay></audio>
</div>
</template>

<script>
export default {
  name: 'EveryDay',
  data () {
    return {
      everyData:[],//每日推荐歌单
      audioData:null,//
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
        // https://v1.itooi.cn/netease/song/newest 最新音乐
        this.$axios({
            url: '/netease/song/newest',
            method: 'get',
        //params参数必写 , 如果没有参数传{}也可以
            data:{ 
            }
        })
        .then((res)=>{
            console.log(res.data.data);
            this.everyData=res.data.data;
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    goSinging:function(id){
      this.$axios({//https://v1.itooi.cn/netease/url?id=37239038&quality=flac  '/netease/lrc?id='+id
            url: '/netease/url?id=37239038&quality=flac&isRedirect=0',
            method: 'get',
        //params参数必写 , 如果没有参数传{}也可以
            data:{ 
            }
        })
        .then((res)=>{
            console.log(res.data.data);
            this.audioData=res.data.data;
        })
        .catch((err)=>{
            console.log(err)
        })
      console.log(id)
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
    padding-top:1rem;
    .per{
        height: 1.2rem;
        width: 10rem;
        padding-left:0.4rem;
        padding-right:0.4rem;
        margin-bottom:0.6rem;
        background: #cecece;
        line-height: 1.2rem;
        text-align: left;
        img{
          height: 1.2rem;
        }
    }
  }
}
</style>
