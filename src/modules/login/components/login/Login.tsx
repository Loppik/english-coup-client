import React from 'react';
import { Field } from 'redux-form';

import Input from '../../../../components/input/Input';
import { setTokens } from '@src/storages/tokenStorage';
import { IReactRouter } from '@mdl/interfaces';

import styles from './login.css';

interface IOwnProps {
  dispatchSignIn: any;
  dispatchGetUserData: any;
  handleSubmit: any;
  tokens: any;
  isError: any;
}

interface IProps extends IOwnProps, IReactRouter {};

class Login extends React.Component<IProps> {
  handleSubmit = values => this.props.dispatchSignIn(values, this.onSuccessSignIn);

  onSuccessSignIn = () => {
    setTokens(this.props.tokens)
    this.props.dispatchGetUserData();
    this.props.history.push('/');
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

export default Login;
