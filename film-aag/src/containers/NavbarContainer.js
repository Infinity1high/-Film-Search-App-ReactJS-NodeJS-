import * as  Actions from '../store/actions/actions';

import Navbar from "../components/Navbar";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.search
});

const mapDispatchToProps = {
    searchTextChangedAction:  Actions.searchTextChangedAction,
    filterFilmsByTitle: Actions.filterFilmsByTitle,
    searchTextChangedAuthorAction: Actions.searchTextChangedAuthorAction

    // loadFilmsAction:  Actions.loadFilmsAction,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);