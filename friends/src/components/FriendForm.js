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
    if (!this.state.friend) return;
    this.props.postFriends(this.state.friend);
    this.setState({
        friend: {
            name: '',
            email: '', 
            age: ''
        }
    })
}

handleChanges = event => {
    this.setState({
        friend: {
            ...this.state.friend,
            [event.target.name]: event.target.value
        }
    })
}

  render() {
    return (
      <div className='form-container'>
        <form className='friend-form' onSubmit={this.addFriend}>
          <input required placeholder='Name' name='name' value={this.state.friend.name} onChange={this.handleChanges}/>
          <input required placeholder='Email' name='email' value={this.state.friend.email} onChange={this.handleChanges}/>
          <input required placeholder='Age' name='age' value={this.state.friend.age} onChange={this.handleChanges}/>
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
