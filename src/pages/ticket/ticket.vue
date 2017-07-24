<template>
  <div class="ticket-root">
      <div class="ticket-head">
          <div class="ticket-head-top">
              <div class="item-img-left">
                  <p>深圳</p>
                  <div><img src="../../assets/right_arrow.png"></div>
              </div>
              <div class="item-swap">
                  <p>电影</p>
                  <p>影院</p>
              </div>
              <div class="item-img-right">
                  <img src="../../assets/search.png">
              </div>
          </div>
          <div class="ticket-head-bottom">
              <div class="ticket-head-bottom-left" :class="{active:leftActive}" @click="clickIsHot">
                  <p>正在热映</p>
              </div>
              <div class="ticket-head-bottom-right" :class="{active:rightActive}" @click="clickIsComing">
                  <p>即将上映</p>
              </div>
          </div>
      </div>
      <router-view></router-view>
  </div> 
</template>

<script>
export default {
  data(){
      return {
        leftActive:false,
        rightActive:false

      }
  },
  computed:{
    
  },
  methods:{
      
      clickIsHot(){
        this.leftActive=true;
        this.rightActive=false;
        this.$router.push('/ticket/hot');
      },
      clickIsComing(){
        this.leftActive=false;
        this.rightActive=true;
        this.$router.push('/ticket/coming');
      }
  },
  created(){
    this.leftActive=true;
    //this.$router.push('/ticket/isHot');
  },
  mounted()
  {   

  }
}
</script>

<style lang="scss" scoped>
@import './ticket.scss';
</style>