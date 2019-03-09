import React from 'react';
import ReactDom from "react-dom";
import SiderSkelecton from './pages/common/common';
import Home from './pages/home/Home';
import Product from "./pages/product/Product";
import Setting from "./pages/setting/Setting";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const RoutesWrap = () => (
    <Router>
      <Switch>
        <SiderSkelecton>
          <Route  path="/home" component={Home}/>
          <Route path="/product" component={Product}/>
          <Route path="/setting" component={Setting}/>
        </SiderSkelecton>
      </Switch>
    </Router>
);

ReactDom.render(
    <RoutesWrap/>,
    document.getElementById('root')
);