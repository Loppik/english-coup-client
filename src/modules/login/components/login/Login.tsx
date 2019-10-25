import React from 'react';
import { Field } from 'redux-form';

import Input from '../../../../components/input/Input';
import { setTokens } from '@src/storages/tokenStorage';
import { IReactRouter } from '@mdl/interfaces';

import styles from './login.css';

interface IStateProps {
  userTokens: any;
  isUserTokensError: any;
}

interface IDispatchProps {
  dispatchSignIn: any;
  dispatchGetUserData: any;
}

interface IOwnProps {
  handleSubmit: any;
}

interface IProps extends IStateProps, IDispatchProps, IOwnProps, IReactRouter {}

class Login extends React.Component<IProps> {
  handleSubmit = values => this.props.dispatchSignIn(values, this.onSuccessSignIn);

  onSuccessSignIn = (): void => {
    setTokens(this.props.userTokens);
    this.props.dispatchGetUserData();
    this.props.history.push('/');
  };

  render() {
    const { handleSubmit, isUserTokensError } = this.props;
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
          <p style={{color: 'red'}}>{isUserTokensError}</p>
          <button type="submit" className={styles.authBtn}>Войти</button>
        </form>
      </div>
    )
  }
}

export default Login;
