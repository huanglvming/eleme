<template>
	<div class="comment-item">
		<div class="item-sup">
			<div class="s-avatar">
				<img :src="item.avatar">
			</div>
			<div class="s-name">
				<p class="customer">{{item.username}}</p>
				<p>
					<span class="star">
						<img v-for="star in item.score" class="icon-star" src="../../assets/star-full.png">
					</span>
					<span class="delivery-time" v-if="item.deliveryTime">{{item.deliveryTime}}分钟送达</span>
				</p>
			</div>
			<div class="s-date">{{item.rateTime}}</div>
		</div>
		<div class="item-content">{{item.text}}</div>
		<div class="item-sub">
			<span v-for="list in item.recommend">{{list}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'ratingsItem',
		props: ["item"],
	}
</script>

<style lang="scss">
	.comment-list{
		padding-bottom: 60px;
		background-color: white;
		.comment-item{
			padding: .9rem;
		}
		div[class^="s-"]{
			display: inline-block;
		}
		.iterm-sup{
			overflow: hidden;
		}
		.s-avatar{
			width: 1.4rem;
			height: 1.4rem;
			border-radius: 50%;
			img{
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.s-name{
			font-size: 10px;
			line-height: 12px;
			color: rgb(7,17,27);
			.customer{
				margin-bottom: 4px;
			}
			.delivery-time{
				color: rgb(147,153,159);
			}
			.icon-star{
				width: 12px;
				margin-right: 2px;
			}
		}
		.s-date{
			float: right;
			font-size: 10px;
			line-height: 12px;
			font-weight: 200;
			color: rgb(147,153,159);
		}
		.item-content{
			margin: 8px 0;
			padding-left: 1.7rem;
			font-size: 12px;
			line-height: 18px;
			color: rgb(7,17,27);
		}
		.item-sub{
			padding-left: 1.7rem;
			padding-bottom: .9rem;
			border-bottom: 1px solid lightgrey;
			span{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: inline-block;
				width: 2.5rem;
				padding: 0 6px;
				margin-right: .4rem;
				text-align: center;
				font-size: 9px;
				line-height: 16px;
				color: rgb(147,153,159);
				border: 1px solid rgb(147,153,159);;
			}
		}
	}
</style>