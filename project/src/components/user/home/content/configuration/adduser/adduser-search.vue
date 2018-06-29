<template>
  <div class="search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="用户姓名" label-width="85px">
                <el-input v-model="formInline.user" placeholder="请输入用户姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="109px" type="primary" @click="onSubmit">查找</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data () {
        return {
            formInline: {
                user: ''
            }
        };
    },
    methods: {
        ...mapActions(['getFilter', 'getData']),
        onSubmit () {
            let filter = this.formInline.user;
            this.getFilter({filter});
            this.getData();
        }
    }
};
</script>
<style scoped>
.search{
    height:67px;
    margin-bottom:15px;
    background:#fff;
    padding-left:15px;
    padding-top:12px;
}
.el-button{
    width:109px;
}
</style>
