import React from 'react';
import {observer,inject} from 'mobx-react';
import {
  Button,
} from 'antd';
import {Link} from 'react-router-dom';
import {userLogin} from '../../api/authApi';

@inject("store") @observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '首页',
      selectedTab: 'redTab',
      hidden: false
    }
  }

  componentDidMount() {
    console.log('request!');
    console.log(this.props.store.homeStore.title);
    // userLogin({phone: '13465673271', password: 'wcb123456'}).then(res => {
    //   console.log(res);
    //   debugger
    // })
  }

  render() {
    return (
        <div className="home-container">
          <div className="home-content">
            <Link to={'/product'}>
              {this.props.store.homeStore.title}
            </Link>
          </div>
          <div>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Button type="primary" onClick={() => this.setState({hidden: !this.state.hidden})}>切换TabBar</Button>
          </div>
        </div>
    );
  }
}

export default Home;