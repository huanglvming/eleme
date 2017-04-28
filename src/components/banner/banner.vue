<template>
	<div class="banner-wrapper" :style="{backgroundImage:obj.avatar}" @click="emitEvent">
		<div class="banner-seller">
			<div class="seller-avatar">
				<img :src="obj.avatar">
			</div>
			<div class="seller-info">
				<div class="seller-name">{{obj.name}}</div>
				<div class="seller-desc">{{obj.description}}／{{obj.deliveryTime}}分钟送达</div>
				<div class="seller-decrease">在线支付满28减5，满50减10</div>
			</div>
		</div>
		<div class="banner-footer">
			<i class="footer-icon"></i>
			{{obj.bulletin}}
		</div>
	</div>
</template>

<script>
	export default{
		name: 'banner',
		props: ["obj"],
		methods:{
			emitEvent(){
				this.$emit('childevent');
			}
		}
	}
</script>

<style lang="scss">
	.blur{
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
        filter: blur(10px);
	}
	.banner-wrapper{
		position: relative;
		background-color: rgba(0,0,0,0.2);
	}
	.banner-seller{
		overflow: hidden;
		padding: 1.2rem;
	}
	.seller-avatar{
		float: left;
		width: 64px;
		height: 64px;
		margin-right: 16px;
		border-radius: 4px;
		img{
			width: 100%;
			height: 100%;
			border-radius: 4px;
		}
	}
	.seller-info{
		float: left;
		display: inline-block;
		position: relative;
		height: 64px;
		.seller-name{
			padding-left: 35px;
			font-size: 16px;
			line-height: 20px;
			&::before{
				content: '';
				display: inline-block;
				position: absolute;
				left: 0;
				top: 0;
				width: 30px;
				height: 20px;
				background: url("./brand.png") no-repeat;
				background-size: 100%;	
			}
		}
		.seller-desc{
			margin-top: 8px;
			font-size: 12px;
			line-height: 12px;
			color: rgb(255,255,255);
			font-weight: 200;
		}
		.seller-decrease{
			margin-top: 10px;
			font-size: 10px;
			line-height: 12px;
			font-weight: 200;
			color: rgb(255,255,255);
			&::before{
				content: '';
				display: inline-block;
				width: 12px;
				height: 12px;
				margin-right: 5px;
				background: url("./decrease.png") no-repeat;
				background-size: 100%;
				transform: translateY(2px);
			}
		}
	}
	.banner-footer{
		height: 28px;
		padding: 6px 14px;
		font-size: 10px;
		line-height: 28px;
		vertical-align: middle;
		color: rgb(255,255,255);
		background-color: rgba(7,17,27,0.2);
		overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;

    	.footer-icon{
    		display: inline-block;
    		width: 30px;
    		height: 16px;
    		background: url('./bulletin.png') no-repeat;
    		background-size: 100%;
    		transform: translateY(3px);
    	}
	}
</style>
