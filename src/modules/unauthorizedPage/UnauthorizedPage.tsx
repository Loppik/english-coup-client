import React, {ComponentClass} from 'react';

import { IReactRouter } from '@mdl/interfaces';

interface IProps extends IReactRouter {}

class UnauthorizedPage extends React.Component<IProps> {
  redirectTo = (path: string): void => {
    this.props.history.push(path);
  };

  redirectToSignInPage = (): void => this.redirectTo('signin');
  redirectToSignUpPage = (): void => this.redirectTo('signup');

  render() {
    return (
      <div style={{paddingTop: '40vh'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h1>English_coup / необходима авторизация</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={this.redirectToSignInPage}>Логин</button>
          <button onClick={this.redirectToSignUpPage} style={{marginLeft: '10px'}}>Регистрация</button>
        </div>
      </div>
    )
  }
}

export default UnauthorizedPage;
