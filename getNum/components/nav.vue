<template name="navBar">
	<!-- 自定义导航栏 -->
	<div class="tab_bar">
		<div class="tip">
			 <img class="img" src="../static/sangeheng.png" alt="">
			 <div class="circle">{{msg}}</div>
		</div>
		<div class="tab">
		  <em :class="activityBg==true&&index==activityBgId?'activityBg':'noActivityBg'" v-for="(item,index) in textData" :key="index" @click="goSwich" @touchstart="getStartStatus" @touchend="getEndStatus" :id="index">
			<em :class="index==activityId?'active noActivity':'noActivity'" >{{item}}</em>
		  </em>
		</div>
		<div class="search">
			<view class="iconfont icon-search"></view>
		</div>
	</div>
</template>

<script>
	export default {
		name:"navBar",
		data() {
			return {
				textData:['我的','发现','朋友','视频'],//循环文字内容
				msg:4,//
				activityId:1,//初始选中的id
				activityBgId:null,//背景选中id
				activityBg:null,//touch背景颜色
			}
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

<style lang="scss">
	@import '../iconfont/iconfont.css';
	.tab_bar{
		user-select:none ;
		width:680.55rpx;
		margin: auto;
		height: 145.83rpx;
		background:#fff;
		position: relative;
		.tab{
			width:459.72rpx;
			margin:auto;
			height: 100%;
			font-size: 29.16rpx;
			display: flex;
			align-items:center;
			justify-content: space-between;
		.activityBg{
			background:rgba($color: #000000, $alpha: 0.1);
			display:block;
			height:90.27rpx;
			width:90.27rpx;
			border-radius:50%;
			.noActivity{
				display:block;
				height:90.27rpx;
				width:90.27rpx;
				border-radius:50%;
				line-height: 90.27rpx;
				text-align:center;
		  }
		  .active{
			font-weight: 900;
			font-size: 30.55rpx;
		  }
		}
		.noActivityBg{
			display:block;
			height:90.27rpx;
			width:90.27rpx;
			border-radius:50%;
		  .noActivity{
			display:block;
			height:90.27rpx;
			width:90.27rpx;
			border-radius:50%;
			line-height: 90.27rpx;
			text-align:center;
		  }
		  .active{
			font-weight: 900;
			font-size: 30.55rpx;
		  }
		}
	  }
	  .tip{
			position:absolute;
			height: 48.61rpx;
			width:34.72rpx;
			padding:5rpx;
			left:0;
			top:48.61rpx;
			.img{
			  height: 48.61rpx;
			}
			.circle{
			  position: absolute;
			  background: red;
			  border-radius: 50%;
			  height: 30.55rpx;
			  line-height: 34.72rpx;
			  color:#fff;
			  text-align:center;
			  font-size: 20.83rpx;
			  width:30.55rpx;
			  top:-13.88rpx;
			  right:-30.55rpx;
			}
	  }
	  .search{
		position:absolute;
		right:0;
		top:56.25rpx;
		padding:5rpx;
	  }
	}
</style>
