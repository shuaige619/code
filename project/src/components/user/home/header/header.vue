<template>
  <div id="headers">
      <i class="el-icon-tickets" style="font-size:24px;" @click="isOpen"></i>
      {{title}}
  </div>
</template>
<script>
import Bus from '@/bus/bus.js';
import { mapState } from 'vuex';
export default {
    data () {
        return {
            open: true
        };
    },
    computed: {
        ...mapState({
            title: (state) => state.gettitle.title
        })
    },
    methods: {
        isOpen () {
            this.open = !this.open;
            Bus.$emit('send', this.open);
        }
    }
};
</script>
<style>
    #headers{
        height: 67px;
        width:100%;
        background:#fff;
        line-height:67px;
        padding-left:15px;
    }
</style>
