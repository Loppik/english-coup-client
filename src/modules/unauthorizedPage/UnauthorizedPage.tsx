import React from 'react';
import { Row, Button } from 'antd';

class UnauthorizedPage extends React.Component {
  redirectTo = path => {
    // this.props.history.push(path); FIXME:
  }

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

export default UnauthorizedPage;