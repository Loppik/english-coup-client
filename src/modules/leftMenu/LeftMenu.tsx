import React from 'react';
import { Menu, Icon } from 'antd';

interface IOwnProps {
  historyPush: (path: string) => void;
}

interface IProps extends IOwnProps {}

class LeftMenu extends React.Component<IProps> {
  render() {
    const { historyPush } = this.props;
    return (
      <Menu mode="vertical" inlineCollapsed={true}>
        <Menu.Item key="1" onClick={() => historyPush('/')}>
          <Icon type="appstore" />
          <span>Основная</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => historyPush('/add')}>
          <Icon type="plus-square" />
          <span>Добавить</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => historyPush('/learn')}>
          <Icon type="bulb" />
          <span>Изучить</span>
        </Menu.Item>
        <Menu.Item key="4" onClick={() => historyPush('/repeat')}>
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
