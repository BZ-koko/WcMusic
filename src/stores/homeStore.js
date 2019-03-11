import React from 'react';
import { observable,action } from 'mobx';


class HomeStore {
  @observable name = 'home';
  @observable title = '首页';
  @action change(){
    console.log('changed-home');
    this.name = 'gouzi'
  }
}

const homeStore = new HomeStore();

export default homeStore