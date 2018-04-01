import axios from "axios/index";

const SERVER_URL = ' ';

export const ACTION_SEARCH_TEXT_CHANGED = 'ACTION_SEARCH_TEXT_CHANGED';
export const ACTION_SEARCH_TEXT_CHANGED_ACTOR = 'ACTION_SEARCH_TEXT_CHANGED_ACTOR';
export const ACTION_SEARCH_FILMS_LOAD_REQUEST = 'ACTION_SEARCH_FILMS_LOAD_REQUEST';
export const ACTION_SEARCH_FILMS_LOAD_SUCCESS = 'ACTION_SEARCH_FILMS_LOAD_SUCCESS';
export const ACTION_SEARCH_FILMS_LOAD_FAILURE = 'ACTION_SEARCH_FILMS_LOAD_FAILURE';
export const ACTION_REMOVE_FILM  = 'ACTION_REMOVE_FILM';
export const ACTION_FILMS_LOAD_REQUEST = 'ACTION_FILMS_LOAD_REQUEST';
export const ACTION_FILMS_LOAD_SUCCESS = 'ACTION_FILMS_LOAD_SUCCESS';
export const ACTION_FILMS_LOAD_FAILURE = 'ACTION_FIL{}MS_LOAD_FAILURE';
export const ACTION_FILTER_FILMS_BY_TITLE = 'ACTION_FILTER_FILMS_BY_TITLE';
export const ACTION_FILTER_FILMS_BY_ACTOR = 'ACTION_FILTER_FILMS_BY_ACTOR';
export const ACTION_UPDATE_FILTER_ARRAY = 'ACTION_UPDATE_FILTER_ARRAY';



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

//
// export function loadFilmsAction(searchText) {
//     console.log(searchText);
//     return (dispatch) => {
//         dispatch({type: ACTION_SEARCH_PHOTOS_LOAD_REQUEST});
//         var URL;
//         if (searchText===''){
//             URL = SERVER_URL+AUTH_URL;
//         }
//         else {
//             URL = SERVER_URL+TEXT_URL+searchText;
//         }
//         axios.get(URL)
//             .then((response) => {
//                 const {data: {photos: {photo}}} = response;
//                 console.log(response);
//                 dispatch({
//                     type: ACTION_SEARCH_PHOTOS_LOAD_SUCCESS,
//                     payload: {photos: photo},
//                 });
//             })
//             .catch((err) => dispatch({type: ACTION_SEARCH_PHOTOS_LOAD_FAILURE, payload: {err}}))
//     };
// }