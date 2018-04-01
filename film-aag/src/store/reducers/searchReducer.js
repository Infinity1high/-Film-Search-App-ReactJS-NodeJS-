import * as Actions from '../actions/actions';
import {ACTION_FILTER_FILMS_BY_TITLE} from "../actions/actions";


const initState = {
    content: '',
    content_actor: '',
    loader: false,
    films: [{
        title: 'King Artur',
        release: '1991',
        format: 'Blueray',
        stars: ['Alan fame', 'rob jake']
    },
        {
            title: 'Red Sparrow',
            release: '1991',
            format: 'Blueray',
            stars: ['Alan fame', 'rob jake']
        }],
    filmsFilteredByTitle:  [ ],
    filmsFilteredByActor: []

};

export default  (state = initState, action) => {
    switch (action.type) {
        case  Actions.ACTION_SEARCH_TEXT_CHANGED:
            return {

                ...state,
                content: action.payload.text,

            };
        case Actions.ACTION_UPDATE_FILTER_ARRAY:
            const filteredFilms=  [...state.films]
            return {
                ...state,
                filmsFilteredByTitle: filteredFilms


            }
        case  Actions.ACTION_SEARCH_FILMS_LOAD_REQUEST:
            return {
                ...state,
                loader: true,
            }
        case  Actions.ACTION_SEARCH_FILMS_LOAD_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loader: false

            };
        case Actions.ACTION_FILTER_FILMS_BY_TITLE:
            const updated_films = [...state.films ];

            let updated_films_arr;
            if (action.payload.searchText.trim()==='') {
                updated_films_arr = updated_films;
            }
            else {
                 updated_films_arr = updated_films.filter(item => (item.title.trim().startsWith(action.payload.searchText) === true));
                 console.log(updated_films_arr);
            }
            return {
                ...state,
                filmsFilteredByTitle: updated_films_arr
            }
        case Actions.ACTION_SEARCH_TEXT_CHANGED_ACTOR:
            const updated_films_actor = [...state.filmsFilteredByActor];
            let updated_films_actor_arr;
            if (action.payload.searchText.trim()==='') {
                updated_films_actor_arr = updated_films_actor;
            }
            else {
                // updated_films_actor_arr = updated_films.filter(item => (item.title.trim().startsWith(action.payload.searchText) === true));
                console.log(updated_films_arr);
            }
            return {

            }


        // case SearchActions.ACTION_REMOVE_FILMS:
        //     const updated_photos_favs = [...state.photos_favs];
        //     updated_photos_favs.splice(action.payload.removed_item,1);
        //     return {
        //         ...state,
        //         photos_favs: updated_photos_favs
        //     }

        default:
            return state;
    }
};