import React, {Component} from 'react';
import FilmItem from './FilmItem';




class FilmList extends Component  {
    componentWillMount() {
        this.props.loadFilmsAction();
        // if (this.props.filmsFilteredByTitle.length === 0) {
        //     this.props.updateFilterArray();
        // }
    }

    renderFilms = () => (
        this.props.filmsFilteredByTitle.map((film, index) => (
            <FilmItem
            key={index}
            title={film.title}
            release={film.release}
            format={film.format}
            stars={film.stars}

            />
))
    )
    render () {
        return (
            <div className='film-list '>
                {this.renderFilms()}
            </div>

        );
    }
}

export default FilmList;