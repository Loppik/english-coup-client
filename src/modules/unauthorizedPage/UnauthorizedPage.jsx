import React from 'react';
import { withRouter } from 'react-router-dom';

class UnauthorizedPage extends React.Component {
  redirectTo = path => this.props.history.push(path);

  render() {
    return (
      <div>
        <h1>Have fun!</h1>
        <button onClick={() => this.redirectTo('signin')}>Sign in</button>
        <button onClick={() => this.redirectTo('signup')}>Sign up</button>
      </div>
    )
  }
}

export default withRouter(UnauthorizedPage);