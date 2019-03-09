import Ajax from './axiosinstance';

const ajax = new Ajax({
  baseURL: '/wcmusic',
  timeout: 500000,
});

//登录
export function userLogin(params) {
  console.log(params,'params');
  return ajax.get(`/login/cellphone?phone=${params.phone}&password=${params.password}`);
}