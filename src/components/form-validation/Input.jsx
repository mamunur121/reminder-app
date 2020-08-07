import React from 'react';

const Input = ({name, label, value, onChange, placeholder, type, error}) => {
  return(
      <div className="form-group">
        <label htmlFor="name">{label}</label>
        <input
            name={name}
            value={value}
            type={type}
            className="form-control"
            id={name}
            onChange={onChange}
            placeholder={placeholder}
        />
        {error && <div className='alert alert-danger'>{error}</div>}
      </div>
  );
};

export default Input;