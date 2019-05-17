import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, FETCH_FRIENDS_FAIL, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_START, POST_FRIENDS_START, POST_FRIENDS_SUCCESS } from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  isLogginIn: false,
  error: '',
  addingFriends: false
};
export const friendsReducer = (state = initialState, action) => {
    // console.log(action)
  switch (action.type) {
      case LOGIN_START:
      return {
          ...state, 
            isLogginIn: true,
            error: ''
      }
      case LOGIN_SUCCESS:
      return {
          ...state,
          isLogginIn: false,
      }
      case FETCH_FRIENDS_START: 
      return {
          ...state,
          fetchingFriends: true, 
          error: ''
      }
      case FETCH_FRIENDS_SUCCESS: 
      return {
          ...state,
          fetchingFriends: false, 
          error: '', 
          friends: action.payload
      }
      case POST_FRIENDS_START:
      return {
          ...state,
          addingFriends: true,
      }
      case POST_FRIENDS_SUCCESS:
      return {
          ...state,
          addingFriends: false,
          error: '',
          friends: action.payload
      }
    default:
      return state;
  }
};
