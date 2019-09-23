import React from 'react'
import PropTypes from 'prop-types';
 const input = ({
   label,
   name,
   value,
   type,
   onChange,
   error
 })=> {
  return (
    <div className="row">
      <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input 
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              className="validate"/>
              <label htmlFor={name}>{label}</label>
            </div>
            {error && <div className="invalid-feedback">{error}</div>}
          </div>
      </form>
     </div>
  )
}
input.propType = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}
input.defaultProps = {
  type: 'text'
};
export default input;