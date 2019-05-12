import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

class LeftMenu extends React.Component {
  redirectTo = path => this.props.history.push(path);

  render() {
    return (
      <Menu mode="vertical" inlineCollapsed={true}>
        <Menu.Item key="1" onClick={() => this.redirectTo('/')}>
          <Icon type="appstore" />
          <span>Main</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => this.redirectTo('/add')}>
          <Icon type="plus-square" />
          <span>Add</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => this.redirectTo('/learn')}>
          <Icon type="bulb" />
          <span>Learn</span>
        </Menu.Item>
        <Menu.Item key="4" onClick={() => this.redirectTo('/repeat')}>
          <Icon type="interation" />
          <span>Repeat</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="line-chart" />
          <span>Graphics</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="setting" />
          <span>Settings</span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(LeftMenu);