<template>
  <div class="box">
    <span :class="active">{{ h }}<span class="maohao">:</span>{{ m }}<span class="maohao">:</span>{{ s }}</span>
    <button @click="start">点击开始</button>
  </div>
</template>

<script>
/** 
 * 时钟特效
*/
export default {
  components: {},
  props: {},
  data() {
    return {
      h: 0,
      m: 0,
      s: 0,
      time: '',
      active: 'active'
    }
  },
  methods: {
    tuDub (n) {
      if (n<10) {
        return "0"+n;
      }
      else {
        return ""+n;
      }
    },
    timer () {
      this.s=this.s+1;       //毫秒
      if(this.s>=60){
        this.s=0;
        this.m=this.m+1;        //分钟
      }
      if(this.m>=60){
        this.m=0;
        this.h=this.h+1;        //小时
      }
      this.str = this.h + ":" + this.m + ":" + this.s + ""
    },
    start () {
      this.time = setInterval(this.timer, 1000)
    }
  },
}
</script>
<style scoped>
.box {
  width: 100%;
  text-align: center;
}
span {
  font-size: 30px;
  text-shadow:0 0 2px #00c6ff;
  color: rgb(255, 241, 116);
  
}
.maohao {
  opacity: 0;
}
span.active .maohao {
  animation: mymove 1s infinite linear;
}
@-webkit-keyframes mymove 
{
0% {opacity:1.0; text-shadow:0 0 20px #00c6ff;}
50% {opacity:0; text-shadow:none; }
100% {opacity:1.0; text-shadow:0 0 20px #00c6ff; }	
}
@keyframes mymove 
{
0% {opacity:1.0; text-shadow:0 0 20px #00c6ff;}
50% {opacity:0; text-shadow:none; }
100% {opacity:1.0; text-shadow:0 0 20px #00c6ff; }	
}
@-moz-keyframes mymove 
{
0% {opacity:1.0; text-shadow:0 0 20px #00c6ff;}
50% {opacity:0; text-shadow:none; }
100% {opacity:1.0; text-shadow:0 0 20px #00c6ff; }	
}
</style>