import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../layout/header';
import Footer from '../layout/footer';
import CommentOne from '../common/showOneComment'
import { connect } from 'react-redux';

import { getComment} from '../../actions/commentsAction'
import {
  initMaterialComponents,
  removeMaterialComponents
} from "../../help/functional";

class Comment extends Component {

  componentDidMount(){
    initMaterialComponents(); 
    const { id } = this.props.match.params;
    this.props.getComment(id);
  }

  componentWillUnmount() {
    removeMaterialComponents();
  }
  render() {
    const { comment } = this.props;

    return (
      <React.Fragment>
        <Header  name_pag="Comentario"/>
        <div className="row">
          <Link to={`/comentarios/edit/${this.props.match.params.id}`}> 
            <i className="material-icons" style={{ color: 'black' }}>edit</i>
          </Link>
          <CommentOne comment={comment} />
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  getComment: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  comment: state.comment.comment
});

export default connect(
  mapStateToProps,
  { getComment }
)(Comment);

