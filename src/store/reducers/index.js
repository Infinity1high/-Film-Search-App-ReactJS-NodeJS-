import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';

import searchReducer from './searchReducer';

const reducers = combineReducers({
    searchReducer,
    form: formReducer
});

export default reducers;