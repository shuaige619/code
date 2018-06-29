<template>
    <div id="home">
        <asides/>
        <div class="container">
            <headers/>
            <contents/>
        </div>
    </div>
</template>
<script>
import asides from './aside/aside.vue';
import headers from './header/header.vue';
import contents from './content/content.vue';
export default {
    data () {
        return {
            menus: ''
        };
    },
    components: {
        asides,
        headers,
        contents
    }
};
</script>
<style>
  #home{
        height:100%;
        background:#F6FAFA;
        position: relative;
        overflow: hidden;
        display:flex;
  }
  .container{
        flex:1;
        display:flex;
        flex-direction: column;
  }
</style>

