<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
    name: 'app'
};
</script>
<style>
  *{
    margin:0;
    padding:0;
    list-style:none;
    box-sizing: border-box; 
  }
  body,html,#app{
    width:100%;
    height:100%;
  }
</style>
