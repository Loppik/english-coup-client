import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from '../../../../components/input/Input';

import styles from './registration.css';

class Registration extends React.Component {
  handleSubmit = values => {
    delete values.confirmPassword;
    this.props.dispatchSignUp(values, this.redirectSignInPage);
  }

  redirectSignInPage = () => this.props.history.push('/signin');

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

Registration = reduxForm({
  form: 'reg',
})(Registration);

export default Registration;
