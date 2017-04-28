<template>
	<div class="seller-general">
		<div class="seller-name">{{general.name}}</div>
		<div class="seller-sold">
			<img src="../../assets/star-full.png" class="seller-star" v-for="star in parseInt(general.score)">
			（{{parseInt(general.rankRate)}}）
			<span class="month-sole">月售{{general.sellCount}}单</span>
		</div>
		<div class="seller-sub">
			<div class="sub-item">
				<p class="sub-title">起送价</p>
				<p>
					<span class="sub-sum">{{general.minPrice}}</span>
					<span class="sub-unit">元</span>
				</p>
			</div>
			<div class="sub-item">
				<p class="sub-title">商家配送</p>
				<p>
					<span class="sub-sum">{{general.deliveryPrice}}</span>
					<span class="sub-unit">元</span>
				</p>
			</div>
			<div class="sub-item">
				<p class="sub-title">配送时间</p>
				<p>
					<span class="sub-sum">{{general.deliveryTime}}</span>
					<span class="sub-unit">分钟</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'sellerGeneral',
		props: ["general"],
	}
</script>

<style lang="scss">
	.seller-general{
		padding: .9rem;
		background-color: white;
		border-bottom: 1px solid lightgrey;
		.seller-name{
			margin-bottom: 8px;
			font-size: 14px;
			line-height: 14px;
			color: rgb(7,17,27);
		}
		.seller-sold{
			padding-bottom: .9rem;
			font-size: 10px;
			line-height: 18px;
			color: rgb(77,85,93);
			border-bottom: 1px solid lightgrey;
		}
		.seller-star{
			width: 12px;
			margin-right: 4px;
		}
		.month-sole{
			margin-left: 10px;
		}
		.seller-sub{
			display: flex;
			padding-top: .9rem;
			.sub-item{
				flex: 1;
				text-align: center;
			}
			.sub-item:not(:last-child){
				border-right: 1px solid lightgrey;
			}
			.sub-title{
				margin-bottom: 6px;
				font-size: 10px;
				line-height: 10px;
				color: rgb(147,153,159);
			}
			.sub-sum{
				font-size: 24px;
				font-weight: 200;
				line-height: 24px;
				color: rbg(7,17,27);
			}
			.sub-unit{
				font-size: 10px;
			}
		}
	}
</style>