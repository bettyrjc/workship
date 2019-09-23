import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

 const  Header = props => {
   const {name_pag} = props;
  return (
    <div>
    <nav>
    <div className="nav-wrapper grey darken-4">
      <Link to="/" className="brand-logo">{name_pag}</Link>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/usuarios">Trabajadores</Link></li>
        <li><Link to="/comentarios">Comentarios</Link></li>
        <li><Link to="collapsible.html">Fotos</Link></li>
        <li><Link to="mobile.html">Inicio</Link></li>
      </ul>
    </div>
  </nav>
  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Trabajadores</a></li>
    <li><a href="badges.html">Comentarios</a></li>
    <li><a href="collapsible.html">Fotos</a></li>
    <li><a href="mobile.html">Inicio</a></li>
  </ul>
</div>
  )
}
Header.defaultProps = {
  name_pag: 'BettyWorkShip'
};

Header.propTypes = {
  name_pag: PropTypes.string.isRequired
};

export default Header;