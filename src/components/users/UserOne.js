import React, { Component } from 'react'
import User from './User'
import { getUser} from '../../actions/userAction'
import PropTypes from 'prop-types';
import Header from '../layout/header';
import Footer from '../layout/footer';
import UserOne from '../common/showOneUser'
import { connect } from 'react-redux';

class UserPrivate extends Component {
  componentDidMount(){
    this.props.getUser(this.props.match.params.id);
  }
  render() {
    const {user} = this.props;
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
  user: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { getUser }
)(UserPrivate);

