<template>
	<div class="shopping-car">
      <div class="car-wrapper">
        <div class="car-icon"></div>
      </div>
      <div class="amount">¥{{amount}}</div>
      <div class="tips">另需配送费¥4</div>
      <div :class="[{submitActive: isActive},'submit']">{{txt}}</div>
    </div>
  </div>
</template>

<script>
	export default{
		name: 'shoppingCar',
    computed:{
      amount(){
        return this.$store.state.amount;
      },
      isActive(){
        return this.$store.state.amount>=20?true:false;
      },
      txt(){
        const amount=this.$store.state.amount;
        if(!amount){
            return '￥20起送'
        }else{
          return amount>=20?"确定":`还差￥${20-amount}`
        }
      }    
    },
  }
</script>

<style lang="scss">
.shopping-car{
  overflow: visible;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 55px;
  background-color: #141d27;
  .car-wrapper{
    float: left;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background-color: #141d27;
    transform: translateX(18px) translateY(-8px);
  }
  .car-icon{
    float: left;
    width: 44px;
    height: 44px;
    margin: 5px;
    border-radius: 50%;
    background-color: rgba(255,255,255,.4);
  }
  .amount{
    float: left;
    height: 24px;
    margin: 15px 0;
    margin-left: 18px;
    padding-right: 12px;
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
    color: rgba(255,255,255,.4);
    border-right: 1px solid rgba(255,255,255,.1);
  }
  .tips{
    float: left;
    margin-left: 12px;
    line-height: 55px;
    text-align: center;
    font-size: 12px;
    line-height: 55px;
    color: rgba(255,255,255,.4);
  }
  .submit{
    float: right;
    width: 105px;
    height: 100%;
    line-height: 55px;
    text-align: center;
    font-size: 16px;
    line-height: 55px;
    font-weight: 700;
    color: rgba(255,255,255,.4);
    background-color: rgba(255,255,255,.4);
  }
  .submitActive{
    color: white !important;
    background-color: rgb(240,20,20) !important;
  }
}
</style>