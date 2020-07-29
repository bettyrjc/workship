import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
// import Input from "../common/input";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/loaders";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { getComment, updateComment } from "../../actions/commentsAction";
import {
  initMaterialComponents,
  // removeMaterialComponents,
} from "../../help/functional";

const EditComment = ({
  loading,
  getComment,
  match,
  comment,
  history,
  updateComment,
}) => {
  // const user = useSelector((state) => state.comment.comment);

  useEffect(() => {
    initMaterialComponents();
    getComment(match.params.id);
  }, []);

  const [values, setValues] = useState(comment);

  const onChange = (event) => {
    let { name, value } = event.target;
    Validator(name, value, formErrors, setFormErrors, setDisabledButton);
    setValues({ ...values, [name]: value });
  };

  // actualizar el estado
  const handleSubmit = (e) => {
    e.preventDefault();
    const { id } = match.params;
    const { body, name, email } = values;
    console.log({ body, name, email });
    updateComment(id, { body, name, email }, history);
  };
  return (
    <React.Fragment>
      <Header name_pag="Editar Usuarios" />
      <div className="card col s12">
        <div className="card-title">Formulario</div>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              label="Name"
              value={values.name}
              onChange={onChange}
            />
            <input
              name="email"
              id="email"
              label="Correo"
              value={values.email}
              type="email"
              onChange={onChange}
            />
            <input
              name="body"
              id="body"
              label="Comentario"
              value={values.body}
              onChange={onChange}
            />

            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block indigo"
            />
          </form>
          {loading && <Spinner />}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
EditComment.propTypes = {
  comment: PropTypes.object.isRequired,
  getComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  comment: state.comment.comment,
  loading: state.comment.loading,
});

export default connect(mapStateToProps, { getComment, updateComment })(
  EditComment
);
