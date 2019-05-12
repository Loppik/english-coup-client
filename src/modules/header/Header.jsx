import React from 'react';
import { Row } from 'antd';

class Header extends React.Component {
  render() {
    return (
      <Row style={{ height: '10vh', borderBottom: '1px solid grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <h1>Здесь могла бы быть Ваша реклама</h1>
      </Row>
    )
  }
}

export default Header;