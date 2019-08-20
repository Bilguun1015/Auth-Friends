import {
    FETCH_FRIENDS_DATA_START,
    FETCH_FRIENDS_DATA_SUCCESS,
    FETCH_FRIENDS_DATA_FAILURE
} from '../actions';

const initialState = {
    friends: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FRIENDS_DATA_START: {
            return {
                ...state,
                isLoading: !state.isLoading,
                error: ''
            }
        }
        case FETCH_FRIENDS_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: true,
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
        default:
            return state;
    }
}