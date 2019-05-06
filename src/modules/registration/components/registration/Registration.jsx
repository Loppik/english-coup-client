import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from '../../../../components/input/Input';
import axios from '../../../../axios';

class Registration extends React.Component {
  handleSubmit = values => {
    delete values.confirmPassword;
    this.props.dispatchSignUp(values, this.redirectMainPage);
  }

  redirectSignInPage = () => this.props.history.push('/signin');

  render() {
    const { handleSubmit, isError } = this.props;
    return (
      <div >
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <label>
            <Field
              name="email"
              component={Input}
              type="text"
            />
          </label>
          <label>
            <Field
              name="password"
              component={Input}
              type="password"
            />
          </label>
          <label>
            <Field
              name="confirmPassword"
              component={Input}
              type="password"
            />
          </label>
          <button type="submit" >Submit</button>
        </form>
        <p style={{color: 'red'}}>{isError}</p>
      </div>
    )
  }
}

Registration = reduxForm({
  form: 'reg',
})(Registration);

export default Registration;
