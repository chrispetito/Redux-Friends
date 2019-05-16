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
          this.props.history.push('/protected')
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input name="username" value={this.state.credentials.username} onChange={this.handleChanges}/>
          <input name="password" value={this.state.credentials.password} onChange={this.handleChanges}/>
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
