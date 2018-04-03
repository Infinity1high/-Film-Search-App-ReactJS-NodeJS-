import * as  Actions from '../store/actions/actions';

import FilmList from "../components/FilmList";
import {connect} from "react-redux";

const mapStateToProps = (store) => ({
    ...store.searchReducer
});

const mapDispatchToProps = {
    updateFilterArray: Actions.updateFilterArray,
    loadFilmsAction: Actions.loadFilmsAction

};

export default connect(
    mapStateToProps,
    mapDispatchToProps //instead of  mapDispatchToProps as it is empty
)(FilmList);