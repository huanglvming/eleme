<template>
	<div :class="[{'slideInDown':show, 'slideOutUp':!show},'mask animated']">
		<div class="mask-wrapper">
			<h2 class="seller-name">{{obj.name}}</h2>
			<div class="seller-star"></div>
			<h4 class="seller-support line">优惠信息</h4>
			<div class="support-list">
				<ul>
					<li class="support-item" v-for="item in obj.supports">{{item.description}}</li>
				</ul>
			</div>
			<h4 class="seller-bulletin line">商家公告</h4>
			<div class="bulletin-info">{{obj.bulletin}}</div>
			<div class="mask-close" @click="close">❌</div>
		</div>			
	</div>

</template>

<script>
	import sellerSupport from "../seller/sellerSupport.vue"
	export default{
		name: 'Mask',
		props: ["obj","show"],
		components:{
			sellerSupport
		},
		methods:{
			close(){
				this.$emit("emitClose");
			}
		}
	}
</script>

<style lang="scss">
	.mask{
		z-index: 99;
		box-sizing: border-box;
		position: fixed;
	    top: 0;
	    left: 0;
	    height: 100%;
	    padding: 0 1.8rem;
	    padding-top: 3.2rem;
	    color: rgb(255,255,255);
	    background: rgba(7,17,27,.8);
		
		.mask-wrapper{
			position: relative;
			width: 100%;
			height: 100%;
		}
		.seller-name{
			margin-bottom: .8rem;
			font-size: 16px;
			font-weight: 700;
			line-height: 16px;
			text-align: center;
		}
		.seller-support,.seller-bulletin{
			font-size: 14px;
			font-weight: 700;
			text-align: center;
			margin-bottom: 1.2rem;
		}
		.support-item,.bulletin-info{
			font-size: 12px;
			font-weight: 200;
			line-height: 2;
		}
		.support-list{
			margin-bottom: 1.4rem;
		}
		.support-item{
			&::before{
				content: '';
				display: inline-block;
				width: 16px;
				height: 16px;
				margin-right: 6px;
				background: url("./decrease.png") no-repeat;
				background-size: 100%;
				transform: translateY(4px);
			}
		}
		.mask-close{
			position: absolute;
			bottom: 1.6rem;
			left: 0;
			right: 0;
			margin: auto;
			text-align: center;
		}	
	}
</style>