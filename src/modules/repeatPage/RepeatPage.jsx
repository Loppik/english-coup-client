import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Button } from 'antd';

class RepeatPage extends React.Component {
  redirectToRepeating = () => this.props.history.push('/repeating');

  render() {
    return (
      <Row style={{marginTop: '30px'}}>
        <Row>
          <Button type="dashed" onClick={this.redirectToRepeating}>Повторение слов</Button>
        </Row>
      </Row>
    )
  }
}

export default withRouter(RepeatPage);