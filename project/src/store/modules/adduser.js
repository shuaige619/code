import {GETDATA, ORDERCURRENTPAGE, GETFILTER} from '../mutation_type';
import axios from 'axios';
const adduser = {
    state: {
        datalist: [],
        datalen: 0,
        page: {
            currentpage: 1,
            pagesize: 10,
            filter: ''
        }
    },
    actions: {
        ordercurrentpage ({commit}, currentpage) {
            commit('ORDERCURRENTPAGE', currentpage);
        },
        getFilter ({commit}, filter) {
            commit('GETFILTER', filter);
        },
        getData ({commit, state}) {
            axios({
                url: '/adduser',
                method: 'get',
                params: state.page
            }).then((res) => {
                commit('GETDATA', res.data);
            });
        }
    },
    mutations: {
        [GETDATA] (state, data) {
            state.datalist = data.data;
            state.datalen = data.datalen;
        },
        [ORDERCURRENTPAGE] (state, currentpage) {
            state.page = Object.assign({}, state.page, currentpage);
        },
        [GETFILTER] (state, filter) {
            state.page = Object.assign({}, state.page, filter);
        }
    }
};
export default adduser;
