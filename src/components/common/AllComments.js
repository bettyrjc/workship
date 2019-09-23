import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteComment } from '../../actions/commentsAction';

 class AllComments extends Component {

  onDeleteClick = id =>{
    this.props.deleteComment(id);
  };
  render() {
    const{
      id, body,name, email
    } = this.props.comment;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div>
                <h2 className="card-title">Comento: {name}</h2>
                <span> Comentario numero:  {id}</span>
                <div className="card-content">
                  <p>{body}</p>
                </div>
                <div className="card-action">
                  <Link to="#">{email}</Link>
                </div>
              </div>
              <div  style={{ float: 'right', marginRight: '1rem'}}>
                <i  className="material-icons"
                    style= {{cursor: 'pointer', color:'blue'}}
                    onClick={this.onDeleteClick.bind(this, id)}
                >delete</i>
                <Link to={`comentarios/editar/${id}`}> 
                  <i className="material-icons" style={{
                    color: 'black'
                  }}
                  >edit</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
AllComments.propTypes ={
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
}
export default connect(
  null,
  {deleteComment}
  )(AllComments)
