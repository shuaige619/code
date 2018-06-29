<template>
    <div>
        <el-form :model="form">
            <el-form-item label="用户名" label-width="100px">
                <el-input v-model="form.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="100px">
                <el-input v-model="form.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="权限管理" label-width="100px">
                 <el-select v-model="form.rules" multiple placeholder="请选择">
                    <el-option
                         v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitform">确 定</el-button>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex';
import fetcher from '@/tools/fetcher';
export default {
    props: ['controldata', 'title'],
    data () {
        return {
            form: {
                username: '',
                password: '',
                rules: [],
                title: ''
            },
            dictions: []
        };
    },
    computed: {
        ...mapState({ // 获取列弹框标题
            dialogtitle: (state) => state.getDiction.dialogtitle,
            tableData: (state) => state.getDiction.tablelist,
            options: (state) => state.getDiction.options
        })
    },
    methods: {
        ...mapActions(['ruleselect', 'getDiction']),
        submitform () { // 判断是添加还是编辑，发送请求
            if (this.form.username !== '' && this.form.password !== '') {
                if (this.dialogtitle === '添加角色') {
                    this.form.title = 'add';
                } else {
                    this.form.title = 'redact';
                }
                fetcher.post('/api/adduser', this.form).then((res) => {
                    if (res.codes) {
                        this.getDiction();
                        this.$message({
                            message: res.msg,
                            type: 'success'
                        });
                    } else {
                        this.$message.error(res.msg);
                    }
                });
            }
            this.$emit('closedialog');
        }
    },
    mounted () {
        this.form = this.controldata;
        this.ruleselect();
    },
    beforeUpdate () {
        this.form = this.controldata;
    }
};
</script>
<style>

</style>
