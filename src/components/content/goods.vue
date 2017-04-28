<template>
	<div class="content-goods">
		<div class="goods-menu">
			<ul>
				<li class="menu-item" v-for="(item,t) in arr" 
					:class="{'menu-item-active': t === index}" 
					@click="menuClick(t)">
					<a>{{item.name}}</a>
				</li>
			</ul>
		</div>
		<div class="goods-list">
			<div v-for="(list,index) in arr" :key="'list-'+index">
				<div class="menu-title" :name="'link-'+index">{{list.name}}</div>
				<div class="goods-items">
					<goods-item :obj="obj" :price="obj.price" :key="'goods-'+index" v-for="(obj,index) in list.foods"></goods-item>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import Vue from "vue"
	// import axios from "axios"
	import goodsItem from "../goods/goods-item.vue"

	export default{
		name: 'goods',
		components:{
			"goods-item": goodsItem
		},
		data(){
			return {
				arr: [],
				foods: [],
				index: 0,
			}		
		},
		mounted(){
			this.$ajax.get("/api/goods").then(response => {
				console.log(response);
				this.arr = response.data.data;
			}).catch(error => {
				console.log(error);
			});
		},
		methods:{
			menuClick(index){
				this.index = index;
			},	
		},
	}
</script>

<style lang="scss">
	.content-goods{
		display: flex;
		height: calc(24rem - 60px);
		padding-bottom: 55px;
		background-color: white;
	}
	.goods-menu{
		overflow-y: scroll;
		box-sizing: border-box;
		width: 22%;
		background-color: #f3f5f7;

		&::-webkit-scrollbar{  
		    width: 0;  
		    height: 0;  
		    background-color: transparent;  
		}  
	}
	.goods-list{
		overflow-y: scroll;
		width: 78%;
		&::-webkit-scrollbar{  
		    width: 0;  
		    height: 0;  
		    background-color: transparent;  
		}
	}
	.menu-item{
		display: table;
		width: calc(100% - 1.2rem);
		padding: 0 .6rem;
		height: 54px;
		font-size: 12px;
		color: #636363;
		line-height: 14px;
		text-align: left;
		vertical-align: middle;
		&>a{
			display: table-cell;
			vertical-align: middle;
			border-bottom: 1px solid rgba(7,17,27,0.1);
		}
	}
	.menu-item-active{
		background-color: white;
		color: black;
		a{
			border-bottom: none;
		}
	}
	.menu-title{
		position: relative;
		height: 26px;
		padding-left: 14px;
		font-size: 12px;
		line-height: 26px;
		color: rgb(147,153,159);
		background-color: #f3f5f7;
		&::before{
			content: "";
			position: absolute;
			display: inline-block;
			left: 0;
			width: 2px;
			height: 26px;
			background-color: #d9dde1;
		}
	}
</style>