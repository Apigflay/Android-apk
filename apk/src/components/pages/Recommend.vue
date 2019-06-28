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
                <div class="per" v-for="(item,index) in listData" :key=index>
                    <svg-icon :icon-class="item.imgSrc"></svg-icon>
                    <p>{{item.name}}</p>
                </div>
            </div>
        </div>
        <!-- 推荐歌单 -->
        <div class="songListArea_wrap">
            <div class="songListArea">
                <div class="title">
                    <h6 class="h6">推荐歌单</h6>
                    <div class="btn">歌单广场</div>
                </div>
                <div class="songList">
                    <div class="per" v-for="(item,index) in songData" :key="index">
                        <img class="img" :src="item.imgSrc" alt="">
                        <p class="p">{{item.info}}</p>
                    </div>
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
            //swiper图片
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
            }],
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
            },
            //列表图片文字
            listData:[{name:'每日推荐',imgSrc:'meirituijian'},{name:'歌单',imgSrc:'yinlerenchuangjiangedan40'},{name:'排行榜',imgSrc:'paihangbang_2'},{name:'电台',imgSrc:'ziyuan'},{name:'直播',imgSrc:'zhibo_1'}],
            // 歌单
            songData:[
                {info:'华语速爆新歌',num:'5亿',imgSrc:'../../../static/imgs/109951164141857357.jpg'},
                {info:'听听歌，笑一笑，生活没什么大不了，你说呢',num:'245万',imgSrc:'../../../static/imgs/109951164145809973.jpg'},
                {info:'薛之谦 李荣浩 陈奕迅 林俊杰 林宥嘉',num:'1109万',imgSrc:'../../../static/imgs/109951164146756014.jpg'},
                {info:'力量训练有氧运动必备|持续就可以拥有劲爆身材',num:'2889万',imgSrc:'../../../static/imgs/109951164154280311.jpg'},
                {info:'【古风】因为前奏爱上一首古风歌',num:'367万',imgSrc:'../../../static/imgs/109951164163755213.jpg'},
                {info:'【战歌】极品电音X史诗',num:'290万',imgSrc:'../../../static/imgs/109951164170676885.jpg'},
            ]

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
            .svg-icon{
                height: 1.32rem;
                width:1.32rem;
            }
            p{
                font-size: 0.34rem;
            }
        }
    }
    //推荐歌单
    .songListArea_wrap{
        width:10.8rem;
        border-top:1px solid #cecece;
        padding:0.54rem 0 1.2rem 0;
        .songListArea{
            height: 10.2rem;
            width:9.8rem;
            margin:auto;
            .title{
                height: 0.7rem;
                width:100%;
                display:flex;
                align-items: center;
                justify-content: space-between;
                padding-bottom:0.26rem;
                .h6{
                    height: 0.7rem;
                    width:2.3rem;
                    font-size: 0.5rem;
                    font-weight: 900;
                    line-height: 0.7rem;
                    text-align: left;
                }
                .btn{
                    height: 0.68rem;
                    width:2.06rem;
                    border:1px solid #cecece;
                    border-radius: 0.34rem;
                    font-size: 0.3rem;
                    line-height: 0.7rem;
                    text-align: center;
                }
            }
            .songList{
                height: 9.24rem;
                width: 9.8rem;
                display:flex;
                align-items: center;
                justify-content: space-around;
                flex-wrap: wrap;
                .per{
                    height: 4.26rem;
                    width: 3.1rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    .img{
                        width:3.1rem;
                        height: 3.1rem;
                    }
                    .p{
                        height:0.94rem;
                        width:100%;
                        font-size: 0.34rem;
                        line-height: 0.49rem;
                        text-align: left;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    }
                }
                
            }
        }
    }
}
//穿透没有用的呀
.swiper_area >>> .swiper-pagination-bullet-active{
    background:red!important;
}
</style>

           