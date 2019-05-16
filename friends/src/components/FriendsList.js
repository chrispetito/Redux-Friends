import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getFriends } from "../actions";

class FriendsList extends React.Component {
  componentDidMount() {
      this.props.getFriends();
  }

  render() {
      console.log(this.props)
    return <div>{this.props.friends.map((friend) => {
        return <h1 key={friend.id}>{friend.name}</h1>
    })}</div>;
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  fetchingFriends: state.friendsReducer.fetchingFriends
});

export default withRouter(
    connect(
      mapStateToProps,
      { getFriends }
    )(FriendsList)
  );