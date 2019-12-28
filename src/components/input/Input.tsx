import React from 'react';

// TODO: set normal types for props
interface IOwnProps {
  input: any;
  type: any;
  meta: any;
}

// TODO: start use this input component
const Input = (props: IOwnProps) => {
  const { input, type, meta } = props;
  return (
    <React.Fragment>
      {/* TODO: refactor this TWO input elements to ONE */}
      {((!meta.error) || (meta.error && !meta.touched)) &&
        <input {...input} type={type} />
      }
      
      {meta.error && meta.touched &&
        <input {...input} type={type} title={meta.error}/>
      }

      <div>{ input.name }</div>
      {meta.touched && ((meta.error && <span style={{color:'red'}}>{meta.error}</span>))}
    </React.Fragment>
  )
}

export default Input;
