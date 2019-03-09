import React from 'react';

import styles from './registration.css';

class Registration extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <form>
          <label>
            <input type="text" required />
            <div className={styles.labelText}>e-mail</div>
          </label>
          <label>
            <input type="password" required />
            <div className={styles.labelText}>password</div>
          </label>
          <label>
            <input type="password" required />
            <div className={styles.labelText}>password</div>
          </label>
          <button className={styles.authBtn}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Registration;
