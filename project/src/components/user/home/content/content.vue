<template>
  	<div id="contents">
        <div class="contents-wrap">
            <router-view></router-view>
        </div>
		  
	  </div>
</template>
<style>
	#contents{
		flex:1;
		padding:15px;
	}
    .contents-wrap{
        width:100%;
        height:100%;
    }
</style>
