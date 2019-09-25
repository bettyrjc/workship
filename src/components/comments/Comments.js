import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  initMaterialComponents,
  removeMaterialComponents
} from "../../help/functional";

import Comment from '../common/AllComments';
import { getComments} from '../../actions/commentsAction'
import Header from '../layout/header';
import Footer from '../layout/footer';

 class Comments extends Component {
   
  componentDidMount(){
    this.props.getComments();
    initMaterialComponents();
  }

  componentWillUnmount() {
    removeMaterialComponents();
  }
 
  render() {
    const {comments} = this.props;
    return (
      <React.Fragment>
        <Header name_pag="Comentarios"/>
          <div className="container">
            <div className="card">
            <div className="card-image">
              <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F450591688688295936%2FYGTW_6aA.jpeg&f=1&nofb=1" alt="Img"/>
              <Link to="/añadir_comentarios"
                className="btn-floating halfway-fab waves-effect waves-light black">
               Hola
                {/* <i className="material-icons">add</i> */}
              </Link>
            </div>
                <div className="col s12">
                { comments.map(
                  comment =>( 
                  <Comment key={comment.id} comment={comment}/>)
                  )
                 }
                </div>
              </div>
          </div>
        <Footer/>
      </React.Fragment>
    )
  }
};

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    getComments: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    comments: state.comment.comments
  });
  
  export default connect(
    mapStateToProps,
    { getComments }
  )(Comments);
  
  