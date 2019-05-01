import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from '../../../../components/input/Input';
import axios from '../../../../axios';

class Registration extends React.Component {
  handleSubmit = values => {
    axios.post('signup', values)
      .then((response) => {
        if (response.status === 200) {
          const { history } = this.props;
          history.push('/login');
        }
      })
      .catch((err) => {

      })
  }

  render() {
    const { handleSubmit } = this.props;
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
      </div>
    )
  }
}

Registration = reduxForm({
  form: 'reg',
})(Registration);

export default Registration;
