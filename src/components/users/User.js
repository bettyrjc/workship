import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUser} from '../../actions/userAction'
import Header from '../layout/header';
import Footer from '../layout/footer';
import UserOne from '../common/showOneUser'
import Spinner from '../common/loaders'

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
    const { user,loading  } = this.props;
    if(loading){
      return <Spinner/>
    }else{
       return (
      <React.Fragment>
        <Header  name_pag="Usuario"/>
        <div className="row">
          <UserOne user={user} loading={loading} />
        </div>
      <Footer/>
      </React.Fragment>
    )
    }
   
  }
}
UserPrivate.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  user: state.user.user,
  loading: state.user.loading
});

export default connect(
  mapStateToProps,
  { getUser }
)(UserPrivate);

