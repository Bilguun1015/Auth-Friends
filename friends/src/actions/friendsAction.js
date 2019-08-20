import {axiosWithAuth} from '../utils/axiosWithAuth'

export const FETCH_FRIENDS_DATA_START = 'FETCH_FRIENDS_DATA_START';
export const FETCH_FRIENDS_DATA_SUCCESS = 'FETCH_FRIENDS_DATA_SUCCESS';
export const FETCH_FRIENDS_DATA_FAILURE = 'FETCH_FRIENDS_DATA_FAILURE';

export const NEW_FRIENDS_ADDED = 'NEW_FRIENDS_ADDED';
export const NEW_FRIENDS_ADDED_SUCCESS = 'NEW_FRIENDS_ADDED_SUCCESS';
export const NEW_FRIENDS_ADDED_FAILURE = 'NEW_FRIENDS_ADDED_FAILURE';

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_FRIENDS_DATA_START });
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('hello',res.data)
                dispatch({ type: FETCH_FRIENDS_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_FRIENDS_DATA_FAILURE, payload: err.response })
            })
    }
}

export const postData = newFriend => {
    return dispatch =>{
        dispatch({ type: NEW_FRIENDS_ADDED})
        axiosWithAuth()
            .post('http://localhost:5000/api/friends',newFriend)
            .then(res => {
                const friend = { type: NEW_FRIENDS_ADDED_SUCCESS, payload: res.data }
                dispatch(friend)
            })
            .catch(err => {
                dispatch({ type: NEW_FRIENDS_ADDED_FAILURE, payload: err.data})
            })
    }  
}