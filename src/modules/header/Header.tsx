import React from 'react';
import { removeTokens } from '../../storages/tokenStorage';
import SantaHat from '@src/components/SantaHat';

interface IOwnProps {
  historyPush: (path: string) => void;
}
interface IProps extends IOwnProps {}

class Header extends React.Component<IProps> {
  onExit = (): void => {
    removeTokens();
    this.props.historyPush('/');
  };

  render() {
    return (
      <div style={{ height: '10vh', borderBottom: '1px solid grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h1>Добро пожаловать на English_coup</h1>
          <SantaHat/>
        </div>
        <div>
          <button onClick={this.onExit}>Выход</button>
        </div>
      </div>
    )
  }
}

export default Header;
