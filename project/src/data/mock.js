import Mock from 'mockjs';
const data = Mock.mock({
    'data|1000': [
        {
            'number|+1': 10001,
            'name': '@cname',
            'email': '@email',
            'depart': '世博研究所',
            'area': '@city',
            'show': '教室App',
            'time': '@date'
        }
    ]
});
export default data;
