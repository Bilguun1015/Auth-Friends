import {
    FETCH_FRIENDS_DATA_START,
    FETCH_FRIENDS_DATA_SUCCESS,
    FETCH_FRIENDS_DATA_FAILURE,
    NEW_FRIENDS_ADDED,
    NEW_FRIENDS_ADDED_SUCCESS,
    NEW_FRIENDS_ADDED_FAILURE
} from '../actions';

const initialState = {
    friends: [],
    isLoaded: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FRIENDS_DATA_START: {
            return {
                ...state,
                isLoaded: false,
                error: ''
            }
        }
        case FETCH_FRIENDS_DATA_SUCCESS: {
            return {
                ...state,
                isLoaded: true,
                friends: action.payload,
                error: ''
            }
        }
        case FETCH_FRIENDS_DATA_FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        case NEW_FRIENDS_ADDED_SUCCESS: {
            return{
                ...state,
                friends: [...state.friends, action.payload],
                error:''
            }
        }
        default:
            return state;
    }
}