import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';


;
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    }
  }
  
  componentDidMount() {
    this.username = '';
    this.password = '';
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleUsernameChange = (event) => {
    this.username = event.target.value;
  };

  handlePasswordChange = (event) => {
    this.password = event.target.value;
  };

  login = () => {
    this.props.login(this.username, this.password);
  };

  render() {
    return (
      <form style={{'margin': '0  auto', 'textAlign': 'center'}} noValidate autoComplete="off">

        <TextField
          id="login"
          label="Login"
          onChange={this.handleUsernameChange}
          style={{'margin': '20px'}}
        />
        <FormControl >
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" onClick={this.login}>
          Login 
        </Button>
        <div style={{'margin': '0  auto', 'textAlign': 'center'}} >{this.props.error}</div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  error: PropTypes.string,
  login: PropTypes.func.isRequired,
};
LoginForm.defaultProps = {
  error: '',
};
