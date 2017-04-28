<template>
	<div class="tab-wrapper">
		<router-link  class="tab-item" :to="'goods'">商品</router-link>
		<router-link  class="tab-item" :to="'ratings'">评价</router-link>
		<router-link  class="tab-item" :to="'seller'">商家</router-link>
	</div>
</template>

<script>
	export default{
		name: 'tab',
	}
</script>

<style>
	.tab-wrapper{
		display: flex;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid rgba(7,17,27,.1);
	}
	.tab-item{
		display: block;
		flex: 1;
		font-size: 14px;
		color: rgb(77,85,93);
		text-align: center;
	}
	.tab-active{
		color: rgb(240,20,20);
	}
</style>