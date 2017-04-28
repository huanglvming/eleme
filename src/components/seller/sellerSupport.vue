<template>
	<div class="seller-support">
		<div class="support-item">
			<i class="support-icon">
				
			</i>
			<p class="support-content">{{support.description}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'sellerSupport',
		props: ["support"],
	}
</script>

<style lang="scss">
	.support-item{
		padding: .8rem .6rem;
		.support-icon{
			display: inline-block;
			width: 16px;
			height: 16px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.support-content{
			display: inline-block;
			vertical-align: top;
			font-size: 12px;
			font-weight: 200;
			line-height: 16px;
			color: rgb(7,17,27);
		}
	}
	.support-item{
		border-bottom: 1px solid lightgrey;
	}
</style>