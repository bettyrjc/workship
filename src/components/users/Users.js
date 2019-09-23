import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './User'
import { getUsers} from '../../actions/userAction'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Common from '../layout/Common'
class Users extends Component {
  componentDidMount(){
    this.props.getUsers();
  }
  render() {
    const {users} = this.props;
    return (
      <React.Fragment>
        <Header  name_pag="Usuarios"/>
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
Users.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  users: state.user.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);

