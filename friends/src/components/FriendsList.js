import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getFriends, postFriends } from "../actions";
import FriendForm from "./FriendForm";

class FriendsList extends React.Component {
    state = {
        friend: {
            name: ''
        }
    }
  componentDidMount() {
    this.props.getFriends();
  }

  handleChanges = event => {
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    });
  };

  addFriend = event => {
    event.preventDefault();
    this.props.postFriends(this.state.friend).then(() => {
        this.props.history.push('/friendslist')
    })
}

  render() {
    console.log(this.props);
    return (
      <div className='friends-list'>
        {this.props.friends.map(friend => {
          return (
            <div className='friend-card' key={friend.id}>
            <h2>{friend.name}</h2>
            <h4>AGE {friend.age}</h4>
            <h5>{friend.email}</h5>
            </div> 
          )
        })}
        <FriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  fetchingFriends: state.friendsReducer.fetchingFriends
});

export default withRouter(
  connect(
    mapStateToProps,
    { getFriends, postFriends }
  )(FriendsList)
);
