import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';

import search from './searchReducer';

const reducers = combineReducers({
    search,
    form: formReducer
});

export default reducers;