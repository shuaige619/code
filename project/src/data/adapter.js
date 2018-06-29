import Adapter from 'axios-mock-adapter';
import axios from 'axios';
import data from './mock';
const Mock = new Adapter(axios);
let list = data.data;
export default {
    getData () {
        let arr = [];
        Mock.onGet('/adduser').reply((config) => {
            const { currentpage, pagesize, filter } = config.params;
            if (filter !== '') {
                arr = [];
                list.map((v) => {
                    if (v.name.includes(filter)) {
                        arr.push(v);
                    }
                });
            } else {
                arr = list;
            }
            let datalen = arr.length;
            let datalist = arr.slice((currentpage - 1) * pagesize, currentpage * pagesize);
            return new Promise((resolve, reject) => {
                resolve([200, {data: datalist, datalen: datalen}]);
            });
        });
    }
};
