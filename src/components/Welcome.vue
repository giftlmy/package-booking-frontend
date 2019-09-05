<template>
    <div class='main'>
        <div><img src="@/assets/lufei.jpg" width="250px"/></div>
        <div><H1>weclome to 菜鸟驿站</H1></div>
    
     <div class="input-demo-size"> 
        <a-input size="large"  placeholder="请输入你的账号" type="text" v-model="message"/><button class="start" @click="start">开始使用</button>
    </div>
    <div>
         
    </div>
    </div>
</template>

<script>


export default {
    
    name:'weclome',
    props:['username'],
    data: function() {
        return {
            message: ""
        }

    },
    methods: {
    start: function() {
      this.$router.push("/WareHouse/");
    }
  }
}
</script>

<style>
.main {
  text-align: center;
}
.start {
  background-color: #4CAF50;
  font-size: 18px;
  border-radius: 12px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  outline:none
}
.start:hover {
    background-color: #4CAF50; /* Green */
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
.input-demo-size .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>