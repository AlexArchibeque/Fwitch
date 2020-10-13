import { connect } from 'react-redux';
import NavBar from './nav_bar';


import { logout } from '../../actions/session';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
