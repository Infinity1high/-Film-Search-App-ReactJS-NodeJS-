import React, {Component} from 'react';




class Navbar extends Component {


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
                        <button type="button" className="btn btn-secondary navbar-item">Add new film</button>
                        <button type="button" className="btn btn-secondary navbar-item">Add collection</button>
                    </div>

                    {/*<ul className='navbar-nav '>*/}
                        {/*<li>*/}
                            {/*<div className='input-group mb-3 search' id="search">*/}
                                {/*<input*/}
                                    {/*// onChange={(e) => {*/}
                                    {/*//     console.log(e);*/}
                                    {/*//     this.props.searchTextChangedAction(e.target.value);*/}
                                    {/*//     this.props.loadPhotosAction(e.target.value);*/}
                                    {/*// }}*/}
                                {/*/>*/}

                            {/*</div>*/}
                        {/*</li>*/}

                    {/*</ul>*/}
            </div>


        )
    }
};

export default  Navbar;