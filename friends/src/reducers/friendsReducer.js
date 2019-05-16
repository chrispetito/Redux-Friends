import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  isLogginIn: false,
  error: ''
};
export const friendsReducer = (state = initialState, action) => {
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
      case LOGIN_FAIL: 
      return {
          ...state,
          error: action.payload
      }
    default:
      return state;
  }
};
