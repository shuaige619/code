<template>
	<div class='adduser'>
        <search/>
        <usertable/>
		<div class="block">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page='currentpage'
                :page-size="pagesize"
                layout="prev, pager, next, jumper"
                :total="datalen">
            </el-pagination>
        </div>     
    </div>
</template>
<script>
import usertable from './adduser-table.vue';
import search from './adduser-search.vue';
import { mapState, mapActions } from 'vuex';
export default {
    data () {
        return {
            pagesize: 3,
            currentpage: 1,
            obj: {}
        };
    },
    components: {
        usertable,
        search
    },
    computed: {
        ...mapState({
            datalen: (state) => state.adduser.datalen
        })
    },
    methods: {
        ...mapActions(['ordercurrentpage', 'getData']),
        handleCurrentChange (currentpage) {
            this.ordercurrentpage({currentpage});
            this.getData();
        }
    }
};
</script>
<style scoped>
    .adduser{
        width:100%;
        height:100%;
    }
    .block{                                                                                                   
        background:#fff;
        text-align: center;
    } 
</style>
