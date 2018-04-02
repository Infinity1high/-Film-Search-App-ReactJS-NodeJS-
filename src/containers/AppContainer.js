import * as Actions from '../store/actions/actions';


import App from "../App";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.search
});

const mapDispatchToProps = {
    searchTextChangedAction:  Actions.searchTextChangedAction,
    filterFilmsByTitle: Actions.filterFilmsByTitle,

    // loadFilmsActionAction:  Actions.loadFilmsAction,

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);