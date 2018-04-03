import axios from "axios/index";

const SERVER_URL = 'https://limitless-savannah-65896.herokuapp.com/';

export const ACTION_SEARCH_TEXT_CHANGED = 'ACTION_SEARCH_TEXT_CHANGED';
export const ACTION_SEARCH_TEXT_CHANGED_ACTOR = 'ACTION_SEARCH_TEXT_CHANGED_ACTOR';
export const ACTION_REMOVE_FILM  = 'ACTION_REMOVE_FILM';
export const ACTION_FILMS_LOAD_REQUEST = 'ACTION_FILMS_LOAD_REQUEST';
export const ACTION_FILMS_LOAD_SUCCESS = 'ACTION_FILMS_LOAD_SUCCESS';
export const ACTION_FILMS_LOAD_FAILURE = 'ACTION_FIL{}MS_LOAD_FAILURE';
export const ACTION_FILTER_FILMS_BY_TITLE = 'ACTION_FILTER_FILMS_BY_TITLE';
export const ACTION_FILTER_FILMS_BY_ACTOR = 'ACTION_FILTER_FILMS_BY_ACTOR';
export const ACTION_UPDATE_FILTER_ARRAY = 'ACTION_UPDATE_FILTER_ARRAY';
export const ACTION_SAVE_NEW_FILM_REQUEST = 'ACTION_SAVE_NEW_FILM_REQUEST';
export const ACTION_SAVE_NEW_FILM_SUCCESS = 'ACTION_SAVE_NEW_FILM_SUCCESS';
export const ACTION_SAVE_NEW_FILM_FAILURE = 'ACTION_SAVE_NEW_FILM_REQUEST';

export function updateFilterArray () {
    return {
        type: ACTION_UPDATE_FILTER_ARRAY
    }
}
export function removeFavoriteFilm (removed_item){
    return {
        type: ACTION_REMOVE_FILM,
        payload: {
            removed_item
        }
    };
}

export function searchTextChangedAction(text) {
    return {
        type: ACTION_SEARCH_TEXT_CHANGED,
        payload: {text}
    };
}

export function searchTextChangedAuthorAction(text) {
    return {
        type: ACTION_SEARCH_TEXT_CHANGED_ACTOR,
        payload: {text}
    }
}

export function filterFilmsByTitle(searchText) {
    return{
        type: ACTION_FILTER_FILMS_BY_TITLE,
        payload: {searchText}
    };
}

export  function filterFilmsByActor(searchText) {
    return {
        type: ACTION_SEARCH_TEXT_CHANGED_ACTOR,
        payload: {searchText}
    };
}

// export function saveNewFilm (form) {
//     return (dispatch) => {
//         dispatch({type: ACTION_SAVE_NEW_FILM_REQUEST});
//         axios.post('', {
//             title: '',
//             release: '',
//             format: '',
//             stars: ''
//         })
//             .then(response => {
//                 console.log(response, 'Signature added!');)
//             .catch()
//     }
//
// }





export function loadFilmsAction() {
    return (dispatch) => {
        dispatch({type: ACTION_FILMS_LOAD_REQUEST});

        axios.get(SERVER_URL)
            .then((response) => {
                console.log(response);
                const {data} = response;
                console.log(response);
                dispatch({
                    type: ACTION_FILMS_LOAD_SUCCESS,
                    payload: {films: data},
                });
            })
            .catch((err) => dispatch({type: ACTION_FILMS_LOAD_FAILURE, payload: {err}}))
    };
}