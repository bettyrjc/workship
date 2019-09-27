import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import User from '../common/User'
import { getUsers} from '../../actions/userAction'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Common from '../layout/Common'
import Spinner from '../common/loaders'
import {
  initMaterialComponents,
  removeMaterialComponents
} from "../../help/functional";

class Users extends Component {
  componentDidMount(){
    this.props.getUsers();
    initMaterialComponents();
  }

  componentWillUnmount() {
    removeMaterialComponents();
  }
  render() {
    const {users, loading} = this.props;
    if(loading){
     return <Spinner/>
    }else{
      return (
        <React.Fragment>
          <Header  name_pag="Usuarios"/>
          <div className="row">
            <h4 className=" col s12 m6 blue-text">Nuestros trabajadores</h4>
            <h4 className=" col s12 m6 blue-text">Tarjetas</h4>
          </div>
          <div className="row">
            <div className="col s12 m6">
          {
            users.map(
              user => (<User key={user.id} user={user}/>)
            )
          }
          </div>
          <div className="col s12 m6">
            <Common/>
          </div>
        </div>
        <Footer/>
        </React.Fragment>
      )
    }
  } 
}
Users.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  users: state.user.users,
  loading: state.user.loading
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);

