import React, { Component } from "react";

import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../layout/header";
import Footer from "../layout/footer";
import CommentOne from "../common/showOneComment";
import { connect } from "react-redux";

import { getComment } from "../../actions/commentsAction";
import {
  initMaterialComponents,
  removeMaterialComponents,
} from "../../help/functional";
import Spinner from "../common/loaders";
// const history = useHistory();
class Comment extends Component {
  componentDidMount() {
    initMaterialComponents();
    const { id } = this.props.match.params;
    this.props.getComment(id);
  }

  componentWillUnmount() {
    removeMaterialComponents();
  }

  redirrecionar = () => {
    this.props.history.push(`/comentarios/edit/${this.props.match.params.id}`);
  };
  render() {
    const { comment, loading } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Header name_pag="Comentario" />
          <div className="row">
            <button onClick={() => this.redirrecionar(comment.id)}>
              <i className="material-icons" style={{ color: "black" }}>
                edit
              </i>
            </button>
            <CommentOne comment={comment} />
          </div>
          <Footer />
        </React.Fragment>
      );
    }
  }
}
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  getComment: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  comment: state.comment.comment,
  loading: state.comment.loading,
});

export default connect(mapStateToProps, { getComment })(Comment);
