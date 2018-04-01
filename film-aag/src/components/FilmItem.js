import React, {Component} from 'react';
// import PropTypes from 'prop-types';



const FilmItem = (props) => (
    <div
        className="film-item"

    >
        <h2>Title: {props.title}</h2>

        <p>Release: {props.release}</p>
        <p>Format: {props.format}</p>
        <p>Stars: {props.stars}</p>


    </div>
);
// FavoritePic.propTypes = {
//     imageUrl: PropTypes.string.isRequired
// };

export default FilmItem;