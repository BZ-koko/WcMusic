import React from 'react';
import {observable, action} from 'mobx';


class HomeStore {
  @observable name = 'home';
  @observable title = '首页';

  @action change() {
    console.log('changed-home');
    this.title === '首页' ? this.title = 'gouzi' : this.title = '首页'
  }
}

const homeStore = new HomeStore();

export default homeStore