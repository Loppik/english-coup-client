import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from '../../../../components/input/Input';
import { emailValidation, passwordValidation } from '../../../../validations/loginForm';
import styles from './login.css';

class Login extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <label>
            <Field
              name="email"
              component={Input}
              type="text"
              validate={[emailValidation]}
            />
          </label>
          <label>
            <Field
              name="password"
              component={Input}
              type="password"
              validate={[passwordValidation]}
            />
          </label>
          <button type="submit" className={styles.authBtn}>Submit</button>
        </form>
      </div>
    )
  }
}

Login = reduxForm({
  form: 'login',
})(Login);

export default Login;