<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navBar></navBar>
		<!-- Swiper -->
		<view class="swiper_area">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item class="swiper-item" v-for="(item,index) in 6" :key="index">
								<view class="swiper-item uni-bg-red">{{item}}</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
		<!--  -->
		<div class="list_area">
			<div class="per" v-for="(item,index) in listData" :key=index :id='index' @click="goListPage">
				<span :class="item.imgSrc" class="iconfont"></span>
				<p>{{item.name}}</p>
			</div>
		</div>
		<!--  -->
		<view class="text-area">
			<text class="title" @click="goPhonenum">{{title}}</text>
		</view>
		<view class="share_area" @click="shareMessage">
			分享微信
		</view>
	</view>
</template>


<script>
	import navBar from "../../components/nav.vue";
	export default {
		components:{
		  navBar
		},
		data() {
			return {
				swiperData:[],//轮播列表
				indicatorDots: true,//是否显示面板指示点
				autoplay: true,//是否自动切换
				interval: 2000,//自动切换时间间隔
				duration: 500,//滑动动画时长
				circular:true,//是否采用衔接滑动
				listData:[//list列表
					{name:'每日推荐',imgSrc:'icon-meirituijian'},
					{name:'歌单',imgSrc:'icon-gedan'},
					{name:'排行榜',imgSrc:'icon-paihangbang'},
					{name:'电台',imgSrc:'icon-diantai1'},
					{name:'直播',imgSrc:'icon-zhibo'}],
				title: 'Hello',
			}
		},
		onLoad() {//监听页面加载，其参数为上个页面传递的数据，参数类型为Object
			console.log("页面加载")
			this.getSwiperData()
		},
		onShow(){//监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面	
			console.log("页面显示")
		},
		onReady(){//监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
			console.log("初次渲染完成")
		},
		onHide(){//监听页面隐藏
			console.log("页面隐藏")
		},
		onUnload(){//监听页面卸载
			console.log("页面卸载")
		},
		onPullDownRefresh(){
			console.log("页面下拉")
		},
		onReachBottom(){
			console.log("页面上啦")
		},
		onPageScroll(){
			console.log("页面滚动")
		},
		methods: {
			getSwiperData:function(){//swiper列表
				uni.request({
					url: 'https://v1.itooi.cn/netease/song?id=37239038,526307800', //仅为示例，并非真实接口地址。
					method:'GET',
					data: {
					},
					header: {
					},
					success: (res) => {
						console.log(res.data.data);
						this.swiperData=res.data.data;
					},
					fail: (err) => {
						console.log(err)
					}
				});
			},
			goListPage:function(e){//list列表页面
				// console.log(e.currentTarget.id)
				if(e.currentTarget.id==0){ 
					this.$router.push({path:'/everyday'})
				}else if(e.currentTarget.id==1){

				}else if(e.currentTarget.id==2){

				}else if(e.currentTarget.id==3){

				}else if(e.currentTarget.id==4){

				}
			},
			goPhonenum:function(){//获取电话号码
				// console.log(111)
				uni.switchTab({
					url: '../phonenum/phonenum?id=1'
				});
				console.log(this.add(1))
				console.log(this.add(3))
			},
			add:function(a){
				return a+a;
			},
			shareMessage:function(){
				console.log(1)
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: "http://uniapp.dcloud.io/",
					title: "uni-app分享",
					summary: "哈哈哈！",
					imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function (err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
				console.log(2)
			}
		}
	}
</script>

<style lang="scss">
@import '../../iconfont/iconfont.css';
page{width: 100%;height: 100%;}
.content {
	height: 100%;
	// ---swiper-item
	.swiper_area{
		padding:0 34.72rpx;
		height: 256.94rpx;
		.uni-padding-wrap,.swiper{
			height: 256.94rpx;
			border-radius: 8.33rpx;
			.uni-swiper-dots-horizontal{
				bottom:20.83rpx;
			}
		}
	}
	// ---listarea--
	.list_area{
		padding:0 34.72rpx;
        height:215.27rpx;
        margin:auto;
        display:flex;
        align-items:center;
        justify-content: space-between;
		border-bottom: 1px solid #cecece;
        .per{
            height:134.72rpx;
            width:97.22rpx;
			text-align: center;
			color:red;
            .iconfont{
				font-size: 80rpx;
            }
            p{
                font-size: 23.61rpx;
				color:#000;
            }
        }
    }
	// 
	.text-area {
		display: flex;
		justify-content: center;
	}
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
}
</style>
