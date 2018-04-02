import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

let NewFilmForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title: </label>
                <Field name="title" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="release">Release: </label>
                <Field name="release" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="format">Format</label>
                <Field name="format" component="input" type="email" />
            </div>
            <div>
                <label htmlFor="stars">Stars</label>
                <Field name="format" component="input" type="email" />
            </div>
            <button type="submit" className='btn btn-secondary'>Save</button>
        </form>
    )
}

NewFilmForm = reduxForm({
    // a unique name for the form
    form: 'newFilm'
})(NewFilmForm);

export default NewFilmForm;