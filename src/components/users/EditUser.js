import React, { Component } from 'react'
import Input from '../common/input'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../common/loaders'
import Header from '../layout/header';
import Footer from '../layout/footer';
import {getUser, updateUser} from '../../actions/userAction'
import {
  initMaterialComponents,
  removeMaterialComponents
} from "../../help/functional";

class EditUser extends Component {
  state = {
    name: '',
    website:'',
    phone: '',
    email:'',
    username:'',
    errors:{}
  };
  componentDidMount() {
    initMaterialComponents();
    const { id } = this.props.match.params;
    this.props.getUser(id);
  }
  componentWillUnmount() {
    removeMaterialComponents();
  }
  componentWillReceiveProps(nextProps){
    const {name, phone, email, username,website} = nextProps.user;
    this.setState({
      name,email,phone,username, website
    });
  }
  onSubmit = e => {
    // if (this.props.user.loading) return;
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
      name,
      email,
      phone,
      website,
      username
    };

    this.props.updateUser(id, updUser, this.props.history);

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });
      
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
              id="name"
              label="Name"
              value={name}
              active_label={true}
              onChange={this.onChange}
              error={errors.name}
            />
             <Input
              id="username"
              label="Username"
              value={username}
              active_label={true}
              onChange={this.onChange}
              error={errors.username}
            />
             <Input
              id="emailthis.props.loading"
              label="Correo"
              value={email}
              type="email"
              active_label={true}
              onChange={this.onChange}
              error={errors.email}
            />
             <Input
              id="phone"
              label="Telefono"
              value={phone}
              active_label={true}
              onChange={this.onChange}
              error={errors.phone}
            />
             <Input
             id="website"
              label="Web Site"
              value={website}
              active_label={true}
              onChange={this.onChange}
              error={errors.name}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block indigo"
            />
          </form>
          {this.props.loading && <Spinner />}
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
  user: state.user.user,
  loading: state.user.loading
});

export default connect(
  mapStateToProps,
  { getUser, updateUser }
)(EditUser);