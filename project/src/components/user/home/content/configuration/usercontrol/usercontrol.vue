<template>
    <div id="usercontrol">
        <el-button type="primary" plain @click="opendialog">添加用户</el-button>
        <usercontrollist/>
        <el-dialog :title="dialogtitle" :visible.sync="dialogFormVisible">
            <userdialog  @closedialog="closedialog" :controldata="controldata"/>
        </el-dialog>
        <div id="usercontrolpage">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="currentpage"
                :page-size="pagesize"
                layout="prev, pager, next, jumper"
                :total="datalen">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import usercontrollist from './usercontrollist.vue';
import userdialog from './dialog.vue';
import {mapState, mapActions} from 'vuex';
import Bus from '@/bus/bus.js';
export default {
    data () {
        return {
            dialogFormVisible: false,
            currentpage: 1,
            pagesize: 10,
            controldata: ''
        };
    },
    components: {
        usercontrollist,
        userdialog
    },
    methods: {
        ...mapActions(['setcurrentpage', 'getDiction', 'setdialogtitle']),
        handleCurrentChange (currentpage) {
            this.setcurrentpage({currentpage});
            this.getDiction();
        },
        closedialog () {
            this.dialogFormVisible = false;
        },
        opendialog () {
            this.setdialogtitle('添加角色');
            this.controldata = {
                username: '',
                password: '',
                rules: []
            };
            this.dialogFormVisible = true;
        }
    },
    computed: { // 获取数据
        ...mapState({
            datalen: (state) => state.getDiction.datalen,
            dialogtitle: (state) => state.getDiction.dialogtitle
        })
    },
    mounted () {
        Bus.$on('closeredac', (row) => {
            this.controldata = row;
            this.dialogFormVisible = true;
        });
    }
};
</script>
<style>
    #usercontrolpage{
        background:#fff;
        text-align: center;
    }
</style>
