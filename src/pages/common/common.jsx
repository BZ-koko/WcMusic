import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon, Layout} from 'antd';

const SubMenu = Menu.SubMenu;
const {Header, Sider, Content} = Layout;

class SiderSkelecton extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <Layout style={{height: '100%'}}>
          <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
          >
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
            >
              <SubMenu
                  key="sub1"
                  title={<span><Icon type={'home'}/> <span>首页</span></span>}
              >
                <Menu.Item key="1">
                  <Link to='/home'>
                    <Icon type={'home'}/>
                    <span>系统首页</span>
                  </Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                  key="sub2"
                  title={<span><Icon type={'smile'}/> <span>我的</span></span>}
              >
                <Menu.Item key="2">
                  <Link to='/product'>
                    <Icon type="smile"/>
                    <span>个人中心</span>
                  </Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                  key="sub3"
                  title={<span><Icon type={'setting'}/> <span>设置</span></span>}
              >
                <Menu.Item key="3">
                  <Link to={'/setting'}>
                    <Icon type="setting"/>
                    <span>设置</span>
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{background: '#fff', paddingLeft: 24}}>
              <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
              />
            </Header>
            <Content>
              <div style={{padding: 24, minHeight: 360}}>
                {
                  this.props.children
                }
              </div>
            </Content>
            {/*<Content style={{*/}
              {/*margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,*/}
            {/*}}*/}
            {/*>*/}
              {/*Content*/}
            {/*</Content>*/}
          </Layout>
        </Layout>
    );
  }
}

export default SiderSkelecton;