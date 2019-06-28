<template>
<div class="tab_bar">
    <div class="tip">
         <img class="img" src="../../../static/imgs/sangeheng.png" alt="">
         <div class="circle">{{msg}}</div>
    </div>
    <div class="tab">
      <em :class="activityBg==true&&index==activityBgId?'activityBg':'noActivityBg'" v-for="(item,index) in textData" :key="index" @click="goSwich" @touchstart="getStartStatus" @touchend="getEndStatus" :id="index">
        <em :class="index==activityId?'active noActivity':'noActivity'" >{{item}}</em>
      </em>
    </div>
    <div class="search">
        <nut-icon 
          type="search" 
          size="0.48rem"
        >
        </nut-icon>
    </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
        textData:['我的','发现','朋友','视频'],//循环文字内容
        msg:4,//
        activityId:1,//初始选中的id
        activityBgId:null,//背景选中id
        activityBg:null,//touch背景颜色
    }
  },
  created() {

  },
  watch: {
    
  },
  filters: {
    
  },
  methods: {
    goSwich:function(e){
      this.activityId=e.currentTarget.id;
      
    },
    getStartStatus:function(e){
      this.activityBg=true;
      this.activityBgId=e.currentTarget.id;
      this.msg=6;
    },
    getEndStatus:function(e){
      this.activityBg=false;
      this.msg=9;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tab_bar{
  user-select:none ;
  width:9.8rem;
  margin: auto;
  height: 2.1rem;
  background:#fff;
  position: relative;
  .tab{
    width:6.62rem;
    margin:auto;
    height: 100%;
    font-size: 0.42rem;
    display: flex;
    align-items:center;
    justify-content: space-between;
    .activityBg{
      background:rgba($color: #000000, $alpha: 0.1);
      display:block;
      height:1.3rem;
      width:1.3rem;
      border-radius:50%;
      .noActivity{
        display:block;
        height:1.3rem;
        width:1.3rem;
        border-radius:50%;
        line-height: 1.3rem;
        text-align:center;
      }
      .active{
        font-weight: 900;
        font-size: 0.44rem;
      }
    }
    .noActivityBg{
        display:block;
        height:1.3rem;
        width:1.3rem;
        border-radius:50%;
      .noActivity{
        display:block;
        height:1.3rem;
        width:1.3rem;
        border-radius:50%;
        line-height: 1.3rem;
        text-align:center;
      }
      .active{
        font-weight: 900;
        font-size: 0.44rem;
      }
    }
    
  }
  .tip{
    position:absolute;
    height: 0.7rem;
    width:0.5rem;
    left:0rem;
    top:0.7rem;
    .img{
      height: 0.7rem;
    }
    .circle{
      position: absolute;
      background: red;
      border-radius: 50%;
      height: 0.44rem;
      line-height: 0.5rem;
      color:#fff;
      text-align:center;
      font-size: 0.3rem;
      width:0.44rem;
      top:-0.20rem;
      right:-0.44rem;
    }
  }
  .search{
    position:absolute;
    right:0rem;
    top:0.81rem;
  }
  
}
</style>
