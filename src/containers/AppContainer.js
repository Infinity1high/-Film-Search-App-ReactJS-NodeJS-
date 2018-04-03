import * as Actions from '../store/actions/actions';


import App from "../App";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.searchReducer
});

const mapDispatchToProps = {
    searchTextChangedAction:  Actions.searchTextChangedAction,
    filterFilmsByTitle: Actions.filterFilmsByTitle,
    loadFilmsAction: Actions.loadFilmsAction

    // loadFilmsActionAction:  Actions.loadFilmsAction,

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);