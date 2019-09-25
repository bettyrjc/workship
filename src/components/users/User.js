import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUser} from '../../actions/userAction'
import Header from '../layout/header';
import Footer from '../layout/footer';
import UserOne from '../common/showOneUser'

import {
  initMaterialComponents,
  removeMaterialComponents
} from "../../help/functional";

class UserPrivate extends Component {
  componentDidMount(){
    initMaterialComponents();
    this.props.getUser(this.props.match.params.id);
  }
  componentWillUnmount() {
    removeMaterialComponents();
  }
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <Header  name_pag="Usuario"/>
        <div className="row">
          <UserOne user={user} />
        </div>
      <Footer/>
      </React.Fragment>
    )
  }
}
UserPrivate.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { getUser }
)(UserPrivate);

