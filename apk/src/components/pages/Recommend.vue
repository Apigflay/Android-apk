<template> 
    <div class="content">
        <NavBar></NavBar>
        <div class="main">
            <!-- SWIPER -->
            <div class="swiper_area" @touchstart="on_top_enter" @touchend="on_top_leave">
                 <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(slide, index) in dataImgItem" :key="index">
                        <img :src="slide.imgSrc" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <!-- list -->
            <div class="list_area">
                <div class="per">
                    <img src="" alt="">
                    <p>每日推荐</p>
                </div>
                <div class="per">

                </div>
                <div class="per">

                </div>
                <div class="per">

                </div>
                <div class="per">

                </div>
            </div>
        </div>
        <FooterBar></FooterBar>
    </div>
</template>
<script>
  export default {
    name: "productList",
    data() {
        return {
            dataImgItem:[{
                      imgSrc:'http://p1.music.126.net/JEiPaJSxNRh3EGETVb2_Xg==/109951164176611426.jpg'
                  },
                  {
                      imgSrc:'http://p1.music.126.net/jtCyhLUwzb0Q4uas7V1L6g==/109951164176508396.jpg'
                  },
                  {
                      imgSrc:'http://p1.music.126.net/_iBCUtelzjNqZjXSGERNMg==/109951164176041905.jpg'
                  },
                  {
                      imgSrc:'http://p1.music.126.net/wixo8kjUEoekkCI746_QnA==/109951164176042943.jpg'
                  },
                   {
                      imgSrc:'http://p1.music.126.net/phGLw7jdKIPO5A_jlx9o9w==/109951164176047831.jpg'
                  },
                  {
                      imgSrc:'http://p1.music.126.net/h3zkTOzbr5dDy6fEgT_biQ==/109951164176050247.jpg'
                  },
                  {
                      imgSrc:'http://p1.music.126.net/IbFjftb5dQ8BB6S1oP6aTw==/109951164176049345.jpg'
                  },
                  {
                      imgSrc:'http://p1.music.126.net/pQPcmQL_OlV11SL4ug3pBg==/109951164176051813.jpg'
                  },
                  {
                      imgSrc:'http://p1.music.126.net/3Wv1zLgj8SYaEUyKtGMyEg==/109951164176066020.jpg'
            }],//swiper图片
            swiperOption: {
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                //自动播放
                autoplay: {
                delay: 1500,
                stopOnLastSlide: false,
                disableOnInteraction: false
                },
                //循环
                loop: true,
                //设定初始化时slide的索引
                initialSlide: 0,
                //滑动速度
                speed: 800,
                //滑动方向
                direction: "horizontal",
                //小手掌抓取滑动
                grabCursor: true,
                //分页器设置 
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
                type: "bullets"
                },
            }

        }
    },
    created() {
       
    },
    mounted() {
     
    },
    watch: {
      
    },
    computed:{
        mySwiper() {
            	// mySwiper 是要绑定到标签中的ref属性
                return this.$refs.mySwiper.swiper
        },
    },
    filters: {
      
    },
    methods: {
        on_top_enter() {
                this.mySwiper.autoplay.stop()
        },
        on_top_leave() {
            this.mySwiper.autoplay.start()
        }
    
    }
}
</script>
<style scoped lang='scss'>
.content{
    width:100%;
    height:100%;
    .main{
        width:9.8rem;
        margin:auto;
      .swiper_area{
        width:9.8rem;
        height:3.70rem;
        border-radius:0.15rem;
        .swiper-container,.swiper-wrapper{
            width:9.8rem;
            height:3.70rem;
            border-radius:0.15rem;
            img{
                width: 9.8rem;
                height: 3.70rem;
                border-radius:0.15rem;
            }
        }
      }
      .test{
        width:9.8rem;
        background: #000;
      }
    } 
    //list列表
    .list_area{
        width:9.8rem;
        height:3.1rem;
        margin:auto;
        display:flex;
        align-items:center;
        justify-content: space-between;
        .per{
            height:1.94rem;
            width:1.4rem;
            background:#cecece;
        }
    }
}
.content .main .swiper_area >>> .swiper-pagination-bullet-active{
    background:red!important;
}
</style>

