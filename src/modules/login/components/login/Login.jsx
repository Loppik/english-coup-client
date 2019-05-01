import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from '../../../../components/input/Input';
import { emailValidation, passwordValidation } from '../../../../validations/loginForm';


class Login extends React.Component {
  handleSubmit = values => {
    const { dispatchLoginUser, history } = this.props;
    dispatchLoginUser(values, history);
  }

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
          <p style={{color: 'red'}}>{isError}</p>
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

Login = reduxForm({
  form: 'login',
})(Login);

export default Login;