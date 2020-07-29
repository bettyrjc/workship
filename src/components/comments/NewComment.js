import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  initMaterialComponents,
  removeMaterialComponents,
} from "../../help/functional";
import Spinner from "../common/loaders";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Input from "../common/input";
import { addComment } from "../../actions/commentsAction";

const NewComment = ({ loading, addComment, history }) => {
  const defaultState = {
    name: "",
    body: "",
    email: "",
  };
  useEffect(() => {
    initMaterialComponents();
  }, []);

  const [values, setValues] = useState(defaultState);
  // Accionadores:
  const onSubmitComments = () => {
    const { body, name, email } = values;

    addComment({ body, name, email }, history);
  };

  const onChange = (event) => {
    let { name, value } = event.target;
    setValues({ ...values, [name]: value });
    console.log(setValues({ ...values, [name]: value }));
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="card">
          <h1 className="card-title">Añadir comentario...</h1>
          <div className="card-content">
            <form>
              <Input
                id="name"
                label="nombre"
                value={values.name}
                onChange={onChange}
              />
              <Input
                id="body"
                label="Comentario"
                value={values.body}
                onChange={onChange}
              />
              <Input
                id="email"
                label="Correo"
                value={values.email}
                onChange={onChange}
              />
            </form>
            {loading && <Spinner />}
            <button onClick={() => onSubmitComments()} className="btn indigo">
              Agregar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

NewComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.comment.loading,
});

export default connect(mapStateToProps, { addComment })(NewComment);
