<template>
	<div id="asides" :class="{'asides-width' : !isCollapse}">
		<div class="touxiang">
        <input type='file' accept="image/*" name='InputFile' ref='InputFile'>
        <button @click='InputFilePost'>提交</button>
    </div>
		<el-menu router :class="{'asides-width' : !isCollapse}" default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
			<el-submenu v-for="(val,ind) in menus" :key="ind" :index="val.menuName">
				<template slot="title">
				<i class="el-icon-location"></i>
				<span slot="title">{{val.menuName}}</span>
				</template>
				<el-menu-item v-for="(v,k) in val.childMenu" :key='k' :index="v.route.path" >{{v.menuName}}</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>
<script>
import fetcher from '@/tools/fetcher.js';
import Bus from '@/bus/bus.js';
export default {
    data () {
        return {
            isCollapse: false,
            menus: [],
            imageUrl: ''
        };
    },
    mounted () {
        Bus.$on('send', vv => {
            this.isCollapse = vv;
        });
        fetcher.get('/api/home').then((res) => {
            this.menus = JSON.parse(res.data);
        });
    },
    methods: {
        InputFilePost () {
            const form = new FormData();
            let inputFile = this.$refs.InputFile;
            console.log(inputFile.files[0]);
            form.append('InputFile', inputFile.files[0]);
            console.log(form);
            // fetcher.postfile('http://localhost:8090/upload', form).then((res) => {
            //     console.log(res);
            // });
        }
    }
};
</script>
<style>
#asides {
  background: #474c60;
  height: 100%;
}
.asides-width{
  width:240px;
}
.touxiang {
  width: 100%;
  height: 134px;
}
.el-menu-vertical-demo {
  height: 100%;
  background: #474c60;
  border: none;
}
.el-submenu {
  background: #3c4052;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #bababa;
  letter-spacing: 0;
}
.el-submenu__title {
  font-size: 16px;
  letter-spacing: 0;
  color: #bababa;
  background: #474c60;
}
.el-menu-item {
  font-size: 16px;
  color: #bababa;
  letter-spacing: 0;
  background: #373b4b;
}
.is-active {
  color: #00d2c0 !important;
  background: #3c4052 !important;
}
</style>
