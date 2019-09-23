import React, { Component } from 'react'
import Input from '../common/input'
import {getUser, updateUser} from '../../actions/userAction'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../layout/header';
import Footer from '../layout/footer';

class EditUser extends Component {
  state = {
    name: '',
    website:'',
    phone: '',
    email:'',
    username:'',
    errors:{}
  };
  onSubmit = e => {
    e.preventDefault();

    const { name, email, phone,website,username } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }
    if (website === '') {
      this.setState({ errors: { website: 'Website is required' } });
      return;
    }
    if (username === '') {
      this.setState({ errors: { username: 'username is required' } });
      return;
    }


    const { id } = this.props.match.params;

    const updUser = {
      id,
      name,
      email,
      phone,
      website,
      username
    };

    this.props.updateUser(updUser);

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/usuarios');
  };

  componentWillReceiveProps(nextProps){
    const {name, phone, email, username,website} = nextProps.user;
    this.setState({
      name,email,phone,username, website
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getUser(id);
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { name, email, phone, username, website, errors} = this.state;
    return (
      <React.Fragment>
        <Header name_pag="Editar Usuarios"/>
        <div className="card col s12">
          <div className="card-title">
            Formulario
          </div>
          <div className="card-content">
          <form onSubmit={this.onSubmit}>
            <Input
              label="Name"
              name="name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
             <Input
              label="Username"
              name="username"
              value={username}
              onChange={this.onChange}
              error={errors.username}
            />
             <Input
              label="Correo"
              name="email"
              value={email}
              type="email"
              onChange={this.onChange}
              error={errors.email}
            />
             <Input
              label="Telefono"
              name="phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
             <Input
              label="Web Site"
              name="website"
              value={website}
              onChange={this.onChange}
              error={errors.name}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}
EditUser.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { getUser, updateUser }
)(EditUser);