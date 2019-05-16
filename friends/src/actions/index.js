import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post(`http://localhost:5000/api/login`, creds)
    .then(res => {
        // debugger;
        console.log(res)
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: LOGIN_FAIL})
    })
}

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAIL = 'FETCH_FRIENDS_FAIL';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
    .get(`http://localhost:5000/api/friends/`)
    .then (res => {
        // debugger;
        console.log(res)
        dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: FETCH_FRIENDS_FAIL})
    })
}

export const POST_FRIENDS_START = 'POST_FRIENDS_START';
export const POST_FRIENDS_SUCCESS = 'POST_FRIENDS_SUCCESS';
export const POST_FRIENDS_FAIL = 'POST_FRIENDS_FAIL';

export const postFriends = friend => dispatch => {
    dispatch({ type: POST_FRIENDS_START});
    return axios
    .post(`http://localhost:5000/api/friends/`, friend)
    .then(res => {
        debugger;
        console.log(res)
        dispatch({ type: POST_FRIENDS_SUCCESS, payload: res.data.payload })
    })
}