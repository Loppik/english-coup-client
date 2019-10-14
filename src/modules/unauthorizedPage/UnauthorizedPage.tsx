import React, {ComponentClass} from 'react';
import { Row, Button } from 'antd';

import { IReactRouter } from '@mdl/interfaces';

interface IProps extends IReactRouter {}

class UnauthorizedPage extends React.Component<IProps> {
  redirectTo = (path: string) => {
    this.props.history.push('/repeating');
  };

  render() {
    return (
      <Row style={{paddingTop: '40vh'}}>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
          <h1>English_coup / необходима авторизация</h1>
        </Row>
        <Row style={{display: 'flex', justifyContent: 'center'}}>
          <Button onClick={() => this.redirectTo('signin')}>Логин</Button>
          <Button onClick={() => this.redirectTo('signup')} style={{marginLeft: '10px'}}>Регистрация</Button>
        </Row>
      </Row>
    )
  }
}

// @ts-ignore
export default UnauthorizedPage;
