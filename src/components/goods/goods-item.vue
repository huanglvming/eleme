<template>
	<div class="goods-item">
		<div class="item-avatar">
			<img :src="obj.image">
		</div>
		<div class="item-info">
			<h4 class="info-name">{{obj.name}}</h4>
			<div class="info-detail">
				<span class="info-sale">月售{{obj.sellCount}}份</span>
				<span class="info-evaluate">好评率{{obj.rating}}%</span>
				<p class="info-price">¥{{obj.price}}</p>
			</div>
		</div>
		<div class="item-operate">
			<span class="operate-sub" @click="sub" v-show="count>0">-</span>
			<span class="operate-count" v-show="count>0">{{count}}</span>
			<span class="operate-add" @click="add">+</span>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'goodsItem',
		props: ['obj','price'],
		data(){
			return {
				count: 0,
				cost: this.price
			}
		},
		methods:{
			add(){
				this.count ++;
				this.$store.commit("addAmount",this.cost);
			},
			sub(){
				this.count --;
				this.$store.commit("subAmount",this.cost);  
			}
		},
	}
</script>

<style lang="scss">
	.goods-item{
		position: relative;
		display: flex;
		padding: .9rem;
		
		.item-avatar{
			width: 60px;
			height: 60px;
			margin-right: 10px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.info-name{
			margin-bottom: 8px;
			font-size: 14px;
			line-height: 14px;
			color: rgb(7,17,27);
		}
		.info-detail{
			margin-bottom: 8px;
			font-size: 10px;
			line-height: 10px;
			color: rgb(147,153,159);
		}
		.info-price{
			vertical-align: top;
			margin-top: 8px;
			font-size: 14px;
			line-height: 24px;
			font-weight: 700;
			color: rgb(240,20,20);
		}
		.item-operate{
			position: absolute;
			display: flex;
			bottom: 1rem;
			right: 1rem;
			vertical-align: bottom;
		}
		.operate-sub,.operate-add{
			display: inline-block;
			width: 24px;
			height: 24px;
			line-height: 24px;
			font-size: 24px;
			font-weight: bold;
			text-align: center;
			border: 1px solid rgb(0,160,220);
			border-radius: 50%;
		}
		.operate-add{
			background-color: rgb(0,160,220);
			color: white;
		}
		.operate-sub{
			color: rgb(0,160,220);
			background-color: white;
		}
		.operate-count{
			display: inline-block;
			width: 24px;
			font-size: 10px;
			text-align: center;
			color: rgb(147,153,159);
			line-height: 24px;
		}
	}
</style>