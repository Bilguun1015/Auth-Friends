import {axiosWithAuth} from '../utils/axiosWithAuth'

export const FETCH_FRIENDS_DATA_START = 'FETCH_FRIENDS_DATA_START';
export const FETCH_FRIENDS_DATA_SUCCESS = 'FETCH_FRIENDS_DATA_SUCCESS';
export const FETCH_FRIENDS_DATA_FAILURE = 'FETCH_FRIENDS_DATA_FAILURE';

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