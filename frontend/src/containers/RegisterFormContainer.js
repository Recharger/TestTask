import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RegisterForm from '../components/RegisterForm';
import AuthService from '../services/AuthService';

class RegisterFormContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.authenticationCheck(nextProps);
  }

  authenticationCheck = (props) => {
    const { state, history, location } = props;
    if (state.authenticated) {
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from);
    }
  };

  render() {
    const { state } = this.props;
    return (
      <RegisterForm
        register={AuthService.register}
        error={state.authenticationError}
      />
    );
  }
}

const mapStateToProps = state => ({
  state: state.auth,
});

export default withRouter(connect(mapStateToProps)(RegisterFormContainer));
