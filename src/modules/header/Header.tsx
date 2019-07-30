import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { removeTokens } from '../../storages/tokenStorage';

class Header extends React.Component {
  onExit = () => {
    removeTokens();
    // this.props.history.push('/'); // FIXME: use browserHistory
  }

  render() {
    return (
      <Row style={{ height: '10vh', borderBottom: '1px solid grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <Col sm={22} style={{display: 'flex', justifyContent: 'center'}}>
          <h1>Добро пожаловать на English_coup</h1>
        </Col>
        <Col sm={2}>
          <Button onClick={this.onExit}>Выход</Button>
        </Col>
      </Row>
    )
  }
}

export default Header;