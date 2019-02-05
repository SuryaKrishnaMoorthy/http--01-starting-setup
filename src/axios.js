import axios from "axios";

// create instance of axios..Can create many instances

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// can also use interceptors like instance.interceptors.request.use() etc

export default instance;

// This is used in Full Post