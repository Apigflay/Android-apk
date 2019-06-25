<template> 
    <div class="content">
        <NavBar></NavBar>
        <div class="main">
            <!-- SWIPER -->
            <div class="swiper_area">
                <nut-swiper
                    direction="horizontal"
                    ref="demo2"
                    :canDragging="false"
                    :paginationVisible="true"

                >
                    <div  v-for="(item,index) in dataImgItem" :key="index"  class="nut-swiper-slide">
                        <!-- <span>page{{item.name}}</span>{{item}} -->
                        <img :src="item.imgSrc" alt="">
                    </div>
                </nut-swiper>
            </div>
            <!-- TEST -->
            <div class="test">11</div>
        </div>
        <FooterBar></FooterBar>
    </div>
</template>
<script>
  export default {
    name: "productList",
    data() {
      return {
        dataItem:null,
        dataImgItem:[],
            
      }
    },
    created() {
        this.getSwiper()
    },
    watch: {
      
    },
    filters: {
      
    },
    methods: {
      getSwiper:function(){
           setTimeout(()=>{
              this.dataItem = [{
                  name:1
              },{
                  name:2
              },{
                  name:3
              },{
                  name:4
              }]

              this.dataImgItem = [
                  {
                      imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t19441/80/1577112624/568821/1ee9b683/5ad064f1Nf41a94b4.jpg'
                  },
                  {
                      imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t16798/338/1617130854/542623/4c197f4d/5ad064f1Nce5f69e2.jpg'
                  },
                  {
                      imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t22123/348/720079801/233727/23c4c0a4/5b162d64Nc5883413.jpg'
                  },
                  {
                      imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t1/27233/9/354/82863/5c090a0eEe2a350d8/aaa6686ce133e364.jpg'
                  }
              ];
              this.$refs.demo2.updateEvent();
          },300)
      }
     
    }
  }
</script>
<style scoped lang='scss'>
.content{
    width:100%;
    height: 100%;
    .main{
      .swiper_area{
        // width:680px;
        width:90%;
        height: 256px;
        margin: auto;
        img{
          width: 100%;
        }
      }
      .test{
        width:750px;
        background: #000;
      }
    }  
}
</style>


