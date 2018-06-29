import {CHANGENAME} from '../mutation_type';
const title = {
    state: {
        title: '你好'
    },
    actions: {
        changeName ({commit}, name) {
            commit('CHANGENAME', name);
        }
    },
    mutations: {
        [CHANGENAME] (state, name) {
            state.title = name;
        }
    }
};
export default title;
