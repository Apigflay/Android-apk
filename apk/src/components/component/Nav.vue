<template>
<div class="tab_bar">
    <div class="tab">
      <em v-for="(item,index) in textData" :key="index">{{item}}</em>
    </div>
    <nut-tabbar 
      @tab-switch="tabSwitch2" 
      type="card" 
      :tabbarList="tabList2"
    >
    </nut-tabbar>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
        textData:['我的','发现','朋友','视频'],//循环文字内容
        tabList2:[
          {
            'tabTitle':'我的',
            'curr':false,
            'icon':'',
            'num':''
          },
          {
            'tabTitle':'发现',
            'curr':true,
            'icon':''
          },
          {
            'tabTitle':'朋友',
            'curr':false,
            'icon':'',
          },
          {
            'tabTitle':'视频',
            'curr':false,
            'icon':'',
          }
        ]
    }
  },
  created() {

  },
  watch: {
    
  },
  filters: {
    
  },
  methods: {
    tabSwitch2:function(value,index){
      console.log(value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tab_bar{
  em{
    font-style: normal;
  }
  // height: 60px;
  background: red;
}
</style>
