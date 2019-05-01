import React from 'react';
import { Menu, Icon } from 'antd';

class RightMenu extends React.Component {
  render() {
    return (
      <Menu mode="vertical" inlineCollapsed={true}>
        <Menu.Item key="1">
          <Icon type="appstore" />
          <span>Learn</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="bulb" />
          <span>Learn</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="interation" />
          <span>Repeat</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="line-chart" />
          <span>Graphics</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="setting" />
          <span>Settings</span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default RightMenu;