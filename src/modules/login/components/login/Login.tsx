import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from '../../../../components/input/Input';
import { setTokens } from '@/storages/tokenStorage';

import styles from './login.css';

class Login extends React.Component {
  handleSubmit = values => this.props.dispatchSignIn(values, this.onSuccessSignIn);

  onSuccessSignIn = () => {
    setTokens(this.props.tokens)
    this.props.dispatchGetUserData();
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, isError } = this.props;
    return (
      <div className={styles.content}>
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
          <button type="submit" className={styles.authBtn}>Войти</button>
        </form>
      </div>
    )
  }
}

Login = reduxForm({
  form: 'login',
})(Login);

export default Login;