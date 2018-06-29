import fetcher from '@/tools/fetcher';
import {GETDICTION, SETCURRENTPAGE, SETDIALOTITLE, SETDICTIONS} from '../mutation_type';
const state = {
    tablelist: [],
    dialogtitle: '',
    options: [],
    page: {
        pagesize: 10,
        currentpage: 1
    },
    datalen: 0
};
const actions = {
    setdialogtitle ({commit}, title) {
        commit('SETDIALOTITLE', title);
    },
    setcurrentpage ({commit}, currentpage) {
        commit('SETCURRENTPAGE', currentpage);
    },
    getDiction ({commit, state}) {
        fetcher.get('/api/userDiction').then((res) => {
            res.datalen = res.data.length;
            let data = res.data.slice((state.page.currentpage - 1) * state.page.pagesize, state.page.currentpage * state.page.pagesize);
            data.map((v, k) => {
                let arr = [];
                JSON.parse(v.rules).map((val, key) => {
                    arr.push(val.menuName);
                });
                v.rules = arr;
            });
            res.data = data;
            commit('GETDICTION', res);
        });
    },
    ruleselect ({commit}) {
        fetcher.get('/api/userlist').then((res) => {
            console.log(res);
            commit('SETDICTIONS', res);
        });
    }
};
const mutations = {
    [GETDICTION] (state, res) {
        state.tablelist = res.data;
        state.datalen = res.datalen;
    },
    [SETCURRENTPAGE] (state, currentpage) {
        state.page = Object.assign({}, state.page, currentpage);
    },
    [SETDIALOTITLE] (state, title) {
        state.dialogtitle = title;
    },
    [SETDICTIONS] (state, data) {
        data.data.map((v, k) => {
            state.options.push({
                value: v,
                label: v,
                name: k
            });
        });
    }
};
export default {
    state,
    actions,
    mutations
};
