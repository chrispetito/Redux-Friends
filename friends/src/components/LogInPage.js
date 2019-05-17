import React from "react";
import { connect } from "react-redux";

import { login } from "../actions";

class LogInPage extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
      event.preventDefault();
      this.props.login(this.state.credentials).then(() => {
          this.props.history.push('/friendslist')
      })
  }

  render() {
    return (
      <div className='login-container'>
        <form className='login-form' onSubmit={this.login}>
          <input placeholder='Username' name="username" value={this.state.credentials.username} onChange={this.handleChanges}/>
          <input placeholder='Password' name="password" value={this.state.credentials.password} onChange={this.handleChanges}/>
          <button >Log In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLogginIn
});

export default connect(
  mapStateToProps,
  { login }
)(LogInPage);
