import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  initMaterialComponents,
  removeMaterialComponents
} from "../../help/functional";
import Header from '../layout/header';
import Footer from '../layout/footer';
import Input from '../common/input' 
import {addComment} from '../../actions/commentsAction'
 
class NewComment extends Component {
   state={
     body:'',
     name:'',
     email:'',
     errors:{}
   }
   componentDidMount(){
    initMaterialComponents();
  }

  componentWillUnmount() {
    removeMaterialComponents();
  }


  // Accionadores:
  onSubmitComments = e =>{
    e.preventDefault();
    const { body, name, email}=this.state;
    // errores
     if(body === ''){
      this.setState({errors:{body:'No puede estar vacio'}})
      return;
    }
    if(name === ''){
      this.setState({errors:{name:'No puede estar vacio'}})
      return;
    }
    if(email === ''){
      this.setState({errors:{email:'No puede estar vacio'}})
      return;
    }

    const newCom = {body,
                    name, 
                    email
                  };

    this.props.addComment(newCom);
  // Limpiar luego del state
    this.setState({body:'', name:'', email:'', errors:{}})
  // enviarlo 
    this.props.history.push('/comentarios')
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {body,
           name, 
           email,
           errors
        } = this.state;
    return (
      <React.Fragment>
        <Header/>
        <div className="container">
          <div className="card">
            <h1 className="card-title">Añadir comentario...</h1>
            <div className="card-content">
              <form>
                <Input
                  id="name"
                  label="nombre"
                  value={name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <Input
                  id="body"
                  label="Comentario"
                  value={body}
                  onChange={this.onChange}
                  error={errors.body}
                />
                <Input
                  id="email"
                  label="Correo"
                  value={email}
                  onChange={this.onChange}
                  error={errors.email}
                />
              </form>
              <button onClick={this.onSubmitComments} className="btn indigo">Agregar</button>
            </div>
          </div>   
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
};
NewComment.propTypes={
  addComment: PropTypes.func.isRequired
}

export default connect(
  null,
  { addComment }
)(NewComment);
