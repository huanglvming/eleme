<template>
	<div class="content-seller">
		<seller-general :general="obj"></seller-general>
		<div class="seller-content">
			<seller-announcement :announcement="obj.bulletin"></seller-announcement>
			<seller-support v-for="(support,index) in obj.supports" :support="support" :key="'support-'+index"></seller-support>
		</div>
		<seller-view :pics="obj.pics"></seller-view>
		<seller-info :infos="obj.infos"></seller-info>
	</div>
</template>

<script>
	import axios from "axios"
	import sellerGeneral from "../seller/sellerGeneral.vue"
	import Vue from "vue"
	import sellerAnnouncement from "../seller/sellerAnnouncement.vue"
	import sellerSupport from "../seller/sellerSupport.vue"
	import sellerView from "../seller/sellerView.vue"
	import sellerInfo from "../seller/sellerInfo.vue"
	export default{
		name: 'seller',
		components:{
			sellerGeneral,
			sellerAnnouncement,
			sellerSupport,
			sellerView,
			sellerInfo
		},
		data(){
			return {
				obj: {},
			}
		},
		mounted(){
			axios.get("/api/seller").then(response => {
				console.log(response);
				this.obj = response.data.data;
			}).catch(error => {
				console.log(error);
			});
		}
	}
</script>

<style lang="scss">
	.content-seller{
		overflow-y: scroll;
		height: 21rem;
		&::-webkit-scrollbar{
			width: 0;
			height: 0;
			background: transparent;
		}
	}
	.seller-content{
		padding: .9rem;
		background-color: white;
	}
</style>