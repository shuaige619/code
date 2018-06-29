<template>
    <el-table :data="tablelist" border style="width: 100%">
        <el-table-column 
            align="center"
            v-for="(v,k) in usercontroltitle"
            :key="k"
            fixed 
            :prop="k"
            :label="v[0]"
            :width="v[1]">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="150">
            <template slot-scope="scope">
                <el-button type="primary" :disabled='isDisabled(scope.row)' icon="el-icon-edit" @click="redacuser(scope.row)"></el-button>
                <el-button type="danger" :disabled='isDisabled(scope.row)' icon="el-icon-delete"  @click="delrow(scope.row)"></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
import usercontrol from '@/assets/userControl/userControl';
import Bus from '@/bus/bus.js';
import {mapActions, mapState} from 'vuex';
import fetcher from '@/tools/fetcher';
export default {
    data () {
        return {
            tableData: [],
            usercontroltitle: usercontrol
        };
    },
    methods: {
        ...mapActions(['getDiction', 'setdialogtitle']),
        redacuser (row) { // 设置弹框标题
            Bus.$emit('closeredac', row);
            this.setdialogtitle('编辑角色');
        },
        delrow (row) { // 删除用户
            fetcher.post('/api/deldictions', row).then((res) => {
                this.getDiction();
                this.$message({
                    message: '删除成功',
                    type: 'success'
                });
            });
        },
        isDisabled (row) {
            let username = localStorage.getItem('username');
            if (row.username === username) {
                return true;
            }
            return false;
        }
    },
    computed: {
        ...mapState({ // 获取列表内容和弹框标题
            tablelist: (state) => state.getDiction.tablelist,
            dialogtitle: (state) => state.getDiction.dialogtitle
        })
    },
    mounted () {
        this.getDiction();
    }
};
</script>
<style>

</style>
