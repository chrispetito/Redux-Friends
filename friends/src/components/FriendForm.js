import React from "react";
import { connect } from "react-redux";
import { postFriends } from '../actions'

class FriendForm extends React.Component {
    state = {
        friend: {
            name: '',
            email: '',
            age: ''
        }
    }

addFriend = event => {
    event.preventDefault();
    this.props.postFriends(this.state.friend);
}

handleChanges = event => {
    this.setState({
        friend: {
            [event.target.name]: event.target.value
        }
    })
}

  render() {
    return (
      <div className='friend-form'>
        <form onSubmit={this.addFriend}>
          <input name='name' value={this.state.name} onChange={this.handleChanges}/>
          <input name='email' value={this.state.email} onChange={this.handleChanges}/>
          <input name='age' value={this.state.age} onChange={this.handleChanges}/>
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    addingFriends: state.friendsReducer.addingFriends,
})

export default connect(
  mapStateToProps,
  { postFriends }
)(FriendForm);
