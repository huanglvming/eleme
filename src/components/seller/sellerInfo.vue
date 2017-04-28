<template>
	<div class="seller-information">
		<h4>商家信息</h4>
		<div class="info-item" v-for="info in infos">{{info}}</div>
	</div>
</template>

<script>
	export default{
		name: 'sellerInfo',
		props: ["infos"]
	}
</script>

<style lang="scss">
	.seller-information{
		padding: .9rem;
		margin-top: .8rem;
		background-color: white;
		h4{
			padding-bottom: 12px;
		    font-size: 16px;
		    font-weight: 400;
		    line-height: 16px;
		    border-bottom: 1px solid lightgrey;
		}
		.info-item{
			padding: 16px 12px;
			font-size: 12px;
			line-height: 16px;
			font-weight: 200;
			color: rgb(7,17,27);
			border-bottom: 1px solid lightgrey;
		}
	}
</style>