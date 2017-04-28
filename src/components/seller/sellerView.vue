<template>
	<div class="seller-view">
		<h4>商家实景</h4>
		<div class="view-photo">
			<img :src="i" v-for="i in pics">
		</div>
	</div>
</template>

<script>
	export default{
		name: 'sellerView',
		props: ["pics"]
	}
</script>

<style lang="scss">
	.seller-view{
		padding: .9rem;
		margin-top: .8rem;
    	background-color: white;
    	h4{
    		margin-bottom: 12px;
    		font-size: 16px;
    		font-weight: 400;
    		line-height: 16px;
    	}
    	.view-photo{
    		height: 4.5rem;
    		white-space: nowrap;
    		overflow-x: scroll;
    		overflow-y: hidden;
    		&::-webkit-scrollbar{  
		        width: 0;  
		        height: 0;  
		        background-color: transparent;  
		    }
    		img{
				width: 6rem;
				height: 4.5rem;
    		}
    		img:not(:last-child){
    			margin-right: 6px;
    		}
    	}
	}
</style>