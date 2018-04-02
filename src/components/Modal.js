import React, {Component} from 'react';
import NewFilmForm from './NewFilmForm';
import Popup from "reactjs-popup";

const contentStyle = {
    maxWidth: "600px",
    width: "90%",
    height: "400px"
};
export default (props) => {

    const { handleSubmit } = props;
    return (
    <Popup
        trigger={<button className="button btn btn-secondary navbar-item"> Add new films </button>}
        modal

    >

        {close => (
            <div>
                Content here
                <a className="close " onClick={close}>
                    &times;
                </a>
                <div className="header"> Add new film</div>
                <NewFilmForm onSubmit={props.submit} />


            </div>
        )}
    </Popup>
    );
}
