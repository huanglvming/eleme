<template>
	<div class="seller-announcement">
		<h4>公告与活动</h4>
		{{announcement}}
	</div>
</template>

<script>
	export default{
		name: 'sellerAnnouncement',
		props: ["announcement"],
	}
</script>

<style lang="scss">
	.seller-announcement{
		h4{
			color: rgb(7,17,27);
			font-size: 16px;
			font-size: 400;
		}
		padding-bottom: .9rem;
		font-size: 12px;
		font-weight: 200;
		color: rgb(240,20,20);
		line-height: 2;
		border-bottom: 1px solid lightgrey;
	}
</style>