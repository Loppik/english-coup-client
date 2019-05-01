import React from 'react';
import { Row, Col } from 'antd';

import Header from '../../../header/Header';
import RightMenu from '../../../rightMenu/RightMenu';

class MainPage extends React.Component {
  componentDidMount() {
    /*
    const token = window.localStorage.getItem('token');
    if (!token) {
      const { history } = this.props;
      history.push('/login');
    }
    */
  }

  onAddClick = () => {
    const { history } = this.props;
    history.push('/add');
  }

  onLearningClick = () => {
    const { history } = this.props;
    history.push('/learning');
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Row>
          <Col sm={3}>
            <RightMenu />
          </Col>
          <Col sm={21}>
            
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default MainPage;
