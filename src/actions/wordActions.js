import {
    ADD_WORD,
    ADD_WORD_SUCCESS,
    ADD_WORD_ERROR
} from '../types';

const baseUrl = 'http://localhost:4000/';

export function addWord(word) {
    return async (dispatch) => {
        dispatch(addWordLoading())

        const response = await window.fetch(`${baseUrl}iecho?text=${word}`);
        const text = await response.json();
        console.log(response);
        console.log(text);
        if (response.ok) {
            dispatch(addWordSuccess(text));
        } else {
            dispatch(addWordError(text.error || 'Unexpected error'));
        }
    }

}

const addWordLoading = () => ({
    type: ADD_WORD
});

const addWordSuccess = (word) => ({
    type: ADD_WORD_SUCCESS,
    payload: word
})

const addWordError = (error) => ({
    type: ADD_WORD_ERROR,
    payload: error
})