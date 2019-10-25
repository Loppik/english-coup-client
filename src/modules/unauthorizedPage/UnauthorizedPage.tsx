import React, {ComponentClass} from 'react';
import { Row, Button } from 'antd';

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
      <Row style={{paddingTop: '40vh'}}>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
          <h1>English_coup / необходима авторизация</h1>
        </Row>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
          <Button onClick={this.redirectToSignInPage}>Логин</Button>
          <Button onClick={this.redirectToSignUpPage} style={{marginLeft: '10px'}}>Регистрация</Button>
        </Row>
      </Row>
    )
  }
}

export default UnauthorizedPage;
