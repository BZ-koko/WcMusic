import React from 'react';
import {toJS} from 'mobx';
import {observer, inject} from 'mobx-react';
import {
  Spin,
  Tabs,
  Button,
} from 'antd';
import {Link} from 'react-router-dom';
import {userLogin} from '../../api/authApi';
import './Home.scss';

@inject('store') @observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    this.props.store.musicStore.musicRankings();
    setTimeout(() => {
      this.setState({loading: false})
    }, 500)
  }

  render() {
    let homeStore = this.props.store.homeStore;
    let musicStore = this.props.store.musicStore;
    return (
        <div className="home-container">
          <Spin tip={'Loading...'} spinning={this.state.loading}>
            <Tabs defaultActiveKey="1">
              {toJS(musicStore.musicRankingsList).length > 0 && toJS(musicStore.musicRankingsList).map((item, index) => (
                  <Tabs.TabPane tab={item.name} key={index} className="tabs-tabPane">
                    <img key={item.name} src={item.pic_s192} className="img-container"/>
                  </Tabs.TabPane>
              ))}
            </Tabs>
            {/*<div className="home-content">*/}
              {/*<Link to={'/product'}>*/}
                {/*{homeStore.title}*/}
              {/*</Link>*/}
            {/*</div>*/}
            {/*<div>*/}
              {/*<Button onClick={() => homeStore.change()}>更新title</Button>*/}
            {/*</div>*/}
          </Spin>
        </div>
    );
  }
}

export default Home;