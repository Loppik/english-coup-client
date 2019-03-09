import React from 'react';

import styles from './input.css';

const Input = (props) => {
  const { input, type, meta } = props;
  return (
    <React.Fragment>
      {!meta.error &&
        <input {...input} type={type} />
      }

      {meta.error && !meta.touched &&
        <input {...input} type={type} />
      }
      
      {meta.error && meta.touched &&
        <input {...input} type={type} className={styles.redLine} title={meta.error}/>
      }

      <div className={styles.labelText}>{ input.name }</div>
    </React.Fragment>
  )
}

export default Input;