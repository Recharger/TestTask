import React from 'react';
import PropTypes from 'prop-types';

export default class RegisterForm extends React.Component {
  componentDidMount() {
    this.username = '';
    this.password = '';
  }

  handleUsernameChange = (event) => {
    this.username = event.target.value;
  };

  handlePasswordChange = (event) => {
    this.password = event.target.value;
  };

  login = () => {
    this.props.register(this.username, this.password);
  };

  render() {
    return (
      <div>
        <input type="text" required placeholder="username" onChange={this.handleUsernameChange} />
        <input type="password" required placeholder="password" onChange={this.handlePasswordChange} />
        <button onClick={this.register}>{'Register'}</button>

        <div>{this.props.error}</div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  error: PropTypes.string,
  login: PropTypes.func.isRequired,
};
RegisterForm.defaultProps = {
  error: '',
}
