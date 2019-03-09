import React from 'react';
import {
  Button,
} from 'antd';
import {Link} from 'react-router-dom';
import {userLogin} from '../../api/authApi';

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
    console.log('request!')
    userLogin({phone: '13465673271', password: 'wcb123456'}).then(res => {
      console.log(res);
      debugger
    })
  }

  render() {
    return (
        <div className="home-container">
          <div className="home-content">
            <Link to={'/product'}>
              {this.state.title}
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