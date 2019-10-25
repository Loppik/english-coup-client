import React from 'react';
import { removeTokens } from '../../storages/tokenStorage';

class Header extends React.Component {
  onExit = () => {
    removeTokens();
    // this.props.history.push('/'); // FIXME: use browserHistory
  }

  render() {
    return (
      <div style={{ height: '10vh', borderBottom: '1px solid grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h1>Добро пожаловать на English_coup</h1>
        </div>
        <div>
          <button onClick={this.onExit}>Выход</button>
        </div>
      </div>
    )
  }
}

export default Header;
