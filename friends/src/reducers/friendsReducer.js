import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, FETCH_FRIENDS_FAIL, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_START } from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  isLogginIn: false,
  error: ''
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
    default:
      return state;
  }
};
