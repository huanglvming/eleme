<template>
	<div class="content-ratings">
		<general-msg :msg="obj"></general-msg>
		<div class="comment-count">
			<div class="comment-tab">
				<span class="tab-item tab-total">全部</span>
				<span class="tab-item tab-great">满意</span>
				<span class="tab-item tab-bad">不满意</span>
			</div>
			<div class="comment-label">
				<label>
					<input type="radio">
					只看有内容的评价
				</label>
			</div>
		</div>
		<div class="comment-list">
			<ratings-item v-for="(item,index) in list" :item="item" :key="'rating-'+index"></ratings-item>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	import ratingsItem from "../ratings/ratings-item.vue"
	import generalMsg from "../ratings/general-message.vue"
	export default{
		name: 'ratings',
		components:{
			ratingsItem,
			generalMsg
		},
		data(){
			return{
				obj:{},
				list: []
			} 
		},
		mounted(){
			this.$ajax.get("api/ratings").then( response => {
				console.log(response);
				let obj = response.data;
				this.obj = obj;
				this.list = obj.data;
				console.log(obj);
			}).catch(error => {
				console.log(error);
			})
		}
	}
</script>

<style lang="scss">
	.content-ratings{
		overflow-y: scroll;
		height: 21rem;
		background-color: #f3f5f7;
		&::-webkit-scrollbar{
			width: 0;
			height: 0;
			background-color: transparent;
		}
	}
	.comment-count{
		background-color: white;
		padding: 0 .9rem;
		border-bottom: 1px solid lightgray;
		.comment-tab{
			overflow: hidden;
			padding: .9rem 0;
			border-bottom: 1px solid lightgray;
		}
		.tab-item{
			float: left;
		    width: 3rem;
		    height: 1.5rem;
		    margin-right: .5rem;
		    line-height: 1.5rem;
		    color: white;
		}
		.tab-total{
			background-color: dodgerblue;
		}
		.tab-great{
			background-color: lightskyblue;
		}
		.tab-bad{
			background-color: lightgrey;
		}
		.comment-label{
			padding: .9rem 0;
			font-size: 10px;
			font-weight: 200;
			line-height: 12px;
			color: rgb(147,153,159);
		}
	}
</style>