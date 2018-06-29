import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/user/login/login.vue';
import Home from '../components/user/home/home.vue';
import adduser from '@/components/user/home/content/configuration/adduser/adduser.vue';
import statement from '@/components/user/home/content/configuration/statement.vue';
import directory from '@/components/user/home/content/configuration/directory.vue';
import usercontrol from '@/components/user/home/content/configuration/usercontrol/usercontrol.vue';
import operations from '@/components/user/home/content/management/operations/operations.vue';
import ElementUI from 'element-ui';
Vue.use(Router);
Vue.use(ElementUI);
const routers = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/home/adduser',
            children: [
                {
                    path: '/home/operations',
                    name: '/operations',
                    component: operations,
                    meta: {
                        title: '运营位列表'
                    }
                },
                {
                    path: '/home/adduser',
                    name: 'adduser',
                    component: adduser,
                    meta: {
                        title: '快捷添加用户'
                    }
                },
                {
                    path: '/home/statement',
                    name: 'statement',
                    component: statement,
                    meta: {
                        title: '报表管理'
                    }
                },
                {
                    path: '/home/directory',
                    name: 'directory',
                    component: directory,
                    meta: {
                        title: '目录管理'
                    }
                },
                {
                    path: '/home/usercontrol',
                    name: 'usercontrol',
                    component: usercontrol,
                    meta: {
                        title: '用户管理'
                    }
                }
            ]
        }
    ]
});
routers.beforeEach((to, from, next) => {
    const title = to.meta.title;
    this.a.app.$store.dispatch('changeName', title);
    next();
});
export default routers;
