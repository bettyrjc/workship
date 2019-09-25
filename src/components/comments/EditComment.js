import React, { Component } from 'react'
import Input from '../common/input'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../layout/header';
import Footer from '../layout/footer';
import {getComment, updateComment} from '../../actions/commentsAction'
import {
  initMaterialComponents,
  removeMaterialComponents
} from "../../help/functional";

class EditComment extends Component {
  state = {
    name: 'hola',
    email:'comentario',
    body: 'fjlhjdflkajsñldhosaidñios',
    errors:{}
  };
  componentDidMount() {
    initMaterialComponents();
    const { id } = this.props.match.params;
    this.props.getComment(id);
  }
  componentWillUnmount() {
    removeMaterialComponents();
  }
  componentWillReceiveProps(nextProps){
    const {name,  email, body} = nextProps.comment;
    this.setState({
      name,email,body
    });
  }
  onSubmit = e => {
    e.preventDefault();

    const { name, email,body } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (body === '') {
      this.setState({ errors: { body: 'Phone is required' } });
      return;
    }
  


    const { id } = this.props.match.params;

    const updComentario = {
      id,
      name,
      email,
     body
    };

    this.props.updateUser(updComentario);

    // Clear State
    this.setState({
      name: '',
      email: '',
      body: '',
      errors: {}
    });
      // this.props.history.push(`/usuarios/${id}`);
    
      this.props.history.push('/comentarios');
    }
  

 
  onChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { name, email, body, errors} = this.state;
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
              id="email"
              label="Correo"
              value={email}
              type="email"
              active_label={true}
              onChange={this.onChange}
              error={errors.email}
            />
             <Input
              id="body"
              label="Comentario"
              value={body}
              active_label={true}
              onChange={this.onChange}
              error={errors.body}
            />
             
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block indigo"
            />
          </form>
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}
EditComment.propTypes = {
  comment: PropTypes.object.isRequired,
  getComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comment: state.comment.comment
});

export default connect(
  mapStateToProps,
  { getComment, updateComment }
)(EditComment);
