<template>
<div class="tab_bar">
    <div class="tip">
         <img class="img" src="../../assets/imgs/sangeheng.png" alt="">
         <div class="circle">{{msg}}</div>
    </div>
    <div class="tab">
      <em :class="index==activityId?'active noActivity':'noActivity'" v-for="(item,index) in textData" :key="index" @click="goSwich" @touchstart="getStartStatus" @touchend="getEndStatus" :id="index">{{item}}</em>
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
        msg:7,//
        activityId:1,//初始选中的
    }
  },
  created() {

  },
  watch: {
    
  },
  filters: {
    
  },
  methods: {
    goSwich:function(){
      // alert('click')
    },
    getStartStatus:function(){
      // prompt(111)
      this.msg=6;
    },
    getEndStatus:function(e){
      // alert(222)
      // console.log(e.target.id);
      // console.log(e.currentTarget.id);
      
      this.activityId=e.currentTarget.id;
      this.msg=9;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tab_bar{
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
    .noActivity{
      display:block;
      height:1.46rem;
      width:1.46rem;
      border-radius:50%;
      // line-height: 2.1rem;
    }
    .active{
      background:blue;
      font-weight: 600;
      font-size: 0.44rem;
    }
  }
  .tip{
    position:absolute;
    height: 0.7rem;
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
      line-height: 0.44rem;
      font-size: 0.3rem;
      width:0.44rem;
      top:-0.10rem;
      right:-0.20rem;
    }
  }
  .search{
    position:absolute;
    right:0rem;
    top:0.81rem;
  }
  
}
</style>
