import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../actions/userAction';

class User extends Component {

  onDeleteClick = id => {
    this.props.deleteUser(id);
  };
  render() {
    const {id, name,email, phone, username, website} = this.props.user;

    return (
      <React.Fragment>
        <div className="container">
         <div className="row">
          <div className="col s12">
            <div className="card">
              <span className="card-title">{username}{''}</span>
              
              <div className="card-content">
              <span>
              <Link to={`usuarios/${id}`}>
                Nombre: {name}{""}
              </Link>
              </span>  
                <p>Correo: {email}</p>
                <p>Telefono: {phone}</p>
                <p>Sitio Web: {website}</p>
              <div>   
              <i className="material-icons"
                 style={{ cursor: 'pointer', float: 'right', color: 'blue' }}
                 onClick={this.onDeleteClick.bind(this, id)}>
                  delete</i>
              <Link to={`usuarios/edit/${id}`}>
                <i
                  className="material-icons"
                  style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: 'black',
                    marginRight: '1rem'
                  }}
                  >edit</i>
              </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>     
      </React.Fragment>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default connect(
null,
{deleteUser}
)(User)