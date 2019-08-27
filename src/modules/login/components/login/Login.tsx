import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from '../../../../components/input/Input';
import { setTokens } from '@src/storages/tokenStorage';

import styles from './login.css';

interface IOwnProps {
  dispatchSignIn: any;
  dispatchGetUserData: any;
  history: any;
  handleSubmit: any;
  tokens: any;
  isError: any;
}

class Login extends React.Component<IOwnProps> {
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

const LoginReduxForm = reduxForm({
  form: 'login',
})(Login);

export default LoginReduxForm;