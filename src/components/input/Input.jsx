import React from 'react';

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
        <input {...input} type={type} title={meta.error}/>
      }

      <div>{ input.name }</div>
    </React.Fragment>
  )
}

export default Input;