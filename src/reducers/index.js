import {
    ADD_WORD,
    ADD_WORD_SUCCESS,
    ADD_WORD_ERROR
} from '../types';

// cada reducer tiene su propio state
const initialState = {
    words: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_WORD:
            return {
                ...state,
                loading: true
            }
        case ADD_WORD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                words: [action.payload, ...state.words,]
            }
        case ADD_WORD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}