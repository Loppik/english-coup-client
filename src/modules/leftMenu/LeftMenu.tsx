import React from 'react';

interface IOwnProps {
  historyPush: (path: string) => void;
}

interface IProps extends IOwnProps {}

class LeftMenu extends React.Component<IProps> {
  redirectTo = (path: string): void => {
    this.props.historyPush(path);
  };

  redirectToMainPage = (): void => this.redirectTo('/');
  redirectToAddPage = (): void => this.redirectTo('/add');
  redirectToLearnPage = (): void => this.redirectTo('/learn');
  redirectToRepeatPage = (): void => this.redirectTo('/repeat');

  render() {
    return (
      <ul >
        <li onClick={this.redirectToMainPage}>
          <span>Основная</span>
        </li>
        <li onClick={this.redirectToAddPage}>
          <span>Добавить</span>
        </li>
        <li onClick={this.redirectToLearnPage}>
          <span>Изучить</span>
        </li>
        <li onClick={this.redirectToRepeatPage}>
          <span>Повторить</span>
        </li>
        <li>
          <span>Графики</span>
        </li>
        <li>
          <span>Настройки</span>
        </li>
      </ul>
    )
  }
}

export default LeftMenu;
