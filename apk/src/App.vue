<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding:0;margin: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /* margin-top: 60px; */
  -webkit-touch-callout:none;  /*系统默认菜单被禁用*/
  -webkit-user-select:none; /*webkit浏览器*/
  -khtml-user-select:none; /*早期浏览器*/
  -moz-user-select:none; /*火狐*/
  -ms-user-select:none;  /*IE10*/
  user-select:none;
}
img{
   pointer-events:none;
}
</style>
