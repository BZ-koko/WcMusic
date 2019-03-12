import Ajax from './axiosinstance';

const ajax = new Ajax({
  baseURL: 'https://api.apiopen.top/musicRankings',
  timeout: 500000,
});

export function getMusicRankings (){
  return ajax.get('https://api.apiopen.top/musicRankings');
}