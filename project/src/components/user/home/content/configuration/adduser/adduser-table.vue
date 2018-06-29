<template>
    <div class="usertable">
        <el-table
            :data='datalist'
            style="width: 100%"
            height="auto">
            <el-table-column 
                v-for="(v,k) in userlist" 
                :key="k"   
                align="center" 
                fixed  
                :prop="k" 
                :label="v[0]" > 
            </el-table-column>
        </el-table>
	</div>
</template>
<script>
import userlist from '@/assets/userlist/userlist';
import { mapState } from 'vuex';
export default {
    data () {
        return {
            userlist: userlist
        };
    },
    computed: {
        ...mapState({
            datalist: (state) => state.adduser.datalist
        })
    },
    mounted () {
        this.$store.dispatch('getData');
    }
};
</script>
<style>
.usertable {
    height: auto;
    background: #fff;
    padding: 15px;
}
.usertable .el-table__body-wrapper {
    height: auto !important;
}
</style>

