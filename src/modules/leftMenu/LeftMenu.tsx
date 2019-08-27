import React from 'react';
import { Menu, Icon } from 'antd';

class LeftMenu extends React.Component {
  redirectTo = path => {
    // this.props.history.push(path); // FIXME: 
  }

  render() {
    return (
      <Menu mode="vertical" inlineCollapsed={true}>
        <Menu.Item key="1" onClick={() => this.redirectTo('/')}>
          <Icon type="appstore" />
          <span>Основная</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => this.redirectTo('/add')}>
          <Icon type="plus-square" />
          <span>Добавить</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => this.redirectTo('/learn')}>
          <Icon type="bulb" />
          <span>Изучить</span>
        </Menu.Item>
        <Menu.Item key="4" onClick={() => this.redirectTo('/repeat')}>
          <Icon type="interation" />
          <span>Повторить</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="line-chart" />
          <span>Графики</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="setting" />
          <span>Настройки</span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default LeftMenu;