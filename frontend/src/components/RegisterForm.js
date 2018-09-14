import React from 'react';
import PropTypes from 'prop-types';

export default class RegisterForm extends React.Component {
  componentDidMount() {
    this.username = '';
    this.firstName= '';
    this.lastName = '';
    this.password = '';
  }

  handleFirstNameChange = (event) => {
    this.firstName = event.target.value;
  };

  handleLastNameChange = (event) => {
    this.lastName = event.target.value;
  };

  handleUsernameChange = (event) => {
    this.username = event.target.value;
  };

  handlePasswordChange = (event) => {
    this.password = event.target.value;
  };

  register = () => {
    this.props.register(
      this.username,
      this.password,
      this.firstName,
      this.lastName);
  };

  render() {
    return (
      <div>
        <input type="text" required placeholder="username" onChange={this.handleUsernameChange} />
        <input type="text" required placeholder="First Name" onChange={this.handleFirstNameChange} />
        <input type="text" required placeholder="Last Name" onChange={this.handleLastNameChange} />
        <input type="password" required placeholder="password" onChange={this.handlePasswordChange} />
        <button onClick={this.register}>{'Register'}</button>

        <div>{this.props.error}</div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  error: PropTypes.string,
  register: PropTypes.func.isRequired,
};
RegisterForm.defaultProps = {
  error: '',
}
