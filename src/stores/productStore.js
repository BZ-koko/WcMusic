import React from 'react';
import { observable,action } from 'mobx';

class ProductStore {
  @observable name = 'product';
  @action change(){
    console.log('changed-product')
  }
}

const productStore = new ProductStore();

export default productStore