import React, {Component} from 'react';
import Popup from "reactjs-popup";
import Modal from './Modal';


class Navbar extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    }

    render() {

        return (
            <div className='navigation'>
                <h1><span className="fa fa-film"></span></h1>
                 <h1>Search your favorite films</h1>
                    <div className='search'>
                    <input className="form-control navbar-item"
                           type="search"
                           placeholder="Search by Title"
                           aria-label="Search"
                           onChange={(e) => {this.props.searchTextChangedAction(e.target.value);
                           this.props.filterFilmsByTitle(e.target.value)}}
                    />
                      <input className="form-control mr-sm-2 navbar-item"
                             type="search"
                             placeholder="Search by Actor"
                             aria-label="Search"
                             onChange={(e) => {this.props.searchTextChangedAuthorAction(e.target.value);}}
                      />
                        <button type="button" className="btn btn-secondary navbar-item" >Add new film</button>
                        <button type="button" className="btn btn-secondary navbar-item">Add collection</button>
                    </div>

                <Modal submit={this.submit}/>
            </div>


        )
    }
};

export default  Navbar;