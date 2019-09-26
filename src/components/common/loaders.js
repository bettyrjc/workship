import React from 'react';

import PropTypes from "prop-types";

import './loader.css'
 const loaders = props=> {
   const {fullWidth} = props
  const content =(
    <div class="loader">
      Loading...
    </div>)
    if (fullWidth) {
      return (
        <div className={'minw-100 center '}>
          <div className="preloader-wrapper active">{content}</div>
          Cargando...
        </div>
      );
    }
  return (
    <div className="preloader-wrapper active">{content}</div>
  )
}
loaders.propTypes = {
  fullWidth: PropTypes.bool.isRequired
};

loaders.defaultProps = {
  fullWidth: false
};

export default loaders;