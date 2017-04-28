<template>
	<div class="general-message">
		<div class="general-left">
			<p class="score-value">3.9</p>
			<p class="score">综合评分</p>
			<p class="score-rating">高于周边商家69.2%</p>
		</div>
		<div class="general-right">
			<div class="right-item">服务态度</div>
			<div class="right-item">商品质量</div>
			<div class="right-item">送达时间</div>	
		</div>
	</div>
</template>

<script>
	export default{
		name: 'generalMsg',
		props: ["msg"],
	}
</script>

<style lang="scss">
	.general-message{
		display: flex;
		padding: .9rem 0;
		margin-bottom: 1rem;
		background-color: white;
		div[class^="general-"]{
			float: left;
			box-sizing: border-box;
		}
	}
	.general-left{
		width: 35%;
		padding: 0 .2rem;
		text-align: center;
		border-right: 1px solid lightgray;
		.score-value{
			font-size: 24px;
			line-height: 28px;
			color: rgb(256,153,0);
		}
		.score{
			margin-top: 6px;
			margin-bottom: 8px; 
			font-size: 12px;
			line-height: 12px;
			color: rgb(7,17,27);
		}
		.score-rating{
			font-size: 10px;
			line-height: 10px;
			-webkit-text-size-adjust:none
		}
	}
	.general-right{
		width: 65%;
		padding: 0 1.2rem;
		.right-item{
			margin-bottom: .4rem;
			font-size: 12px;
			line-height: 18px;
			color: rgb(7,17,27);
		}
	}
</style>