<template>
	<view @click="goIndex">
		goindex
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goIndex:function(){
				console.log(this.add(2))
				console.log(this.add(3))
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			add:function(a){
				return a+a;
			}
		}
		
	}
</script>

<style lang="scss">

</style>
