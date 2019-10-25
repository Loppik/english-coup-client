import React from 'react';
import {Field} from 'redux-form';

import Input from '../../../../components/input/Input';

import { IReactRouter } from '@mdl/interfaces';

import styles from './registration.css';

interface IOwnProp {
  dispatchSignUp: any;
  handleSubmit: any;
  isError: any;
}

interface IProps extends IOwnProp, IReactRouter {}

class Registration extends React.Component<IProps> {
  handleSubmit = values => {
    delete values.confirm;
    this.props.dispatchSignUp(values, this.redirectSignInPage);
  };

  redirectSignInPage = () => this.props.history.push('/signin');

  render() {
    const {handleSubmit, isError} = this.props;
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
          <label>
            <Field
              name="confirm"
              component={Input}
              type="password"
            />
          </label>
          <button type="submit" className={styles.authBtn}>Регистрация</button>
        </form>
      </div>
    )
  }
}


export default Registration;
