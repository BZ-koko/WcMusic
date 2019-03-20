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
//关于axios两次请求：
// 一次是自己设置的请求方式，还有一次是options;
// 跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站有权限访问哪些资源。
// 另外，规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），
// 浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），
// 从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。
//
// 先使用options去测试，你这个接口是否能够正常通讯，如果不能就不会发送真正的请求过来，如果测试通讯正常，则开始正常请求。


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