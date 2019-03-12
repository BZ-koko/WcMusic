import React from 'react';
import {observable, action} from 'mobx';
import {notification} from 'antd';
import {getMusicRankings} from '../api/musicApi';


class MusicStore {
  @observable musicRankingsList = [];

  @action
  musicRankings() {
    try {
      getMusicRankings().then(res => {
        if (res.code === 200) {
          musicStore.musicRankingsList = res.result;
        } else {
          notification.open({
            message: '警告',
            description: '获取音乐排行榜数据失败！',
            onClick: () => {
            }
          })
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}

const musicStore = new MusicStore();

export default musicStore