import axios from 'axios';
import {notification} from 'antd';

const defaultHeader = {
  'Content-Type': 'application/json',
  'appname': 'wcmusic',
  'platform': 'web',
  'v': '1.0',
  'version': 'wcmusic1.0',
  'lang': 'zh-CN',
  'country': 'CN',
  // 'token': ''
};

export default ({baseURL = '', timeout = 30000, header = defaultHeader}) => {
  //axios 实例化
  const axiosinstance = axios.create({baseURL, timeout, header});

  //请求拦截
  axiosinstance.interceptors.request.use((config) => {
    console.log(config,'request config');
    let {method, params = {}, data = {}, url} = config;
    if (!(method === 'get') && !(method === 'post')) {
      return Promise.reject({
        message: `请求类型错误${method}`,
      });
    }
    config.params = params;
    config.data = data;
    config.url = url;
    return config;
  }, error => Promise.reject({
    message: error.message || '请求参数配置异常',
  }));

  //响应拦截
  axiosinstance.interceptors.response.use((response) => {
    console.log(response.data);
    return response.data;
  }, (error) => {
    notification.open({
      message: 'notification',
      description: error,
      onClick: () => {
      },
    });
    return Promise.reject({
      message: error.message || '服务器异常'
    });
  });

  return axiosinstance;
}