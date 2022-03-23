import React from 'react';
import './info.scss';

function Info() {
    return (
        <div className="row contact p-5 w-100 m-0">
            <div className="contact-text row text-center">
                <h1 className="col-xs-6 col-md-10 d-flex justify-content-start">
                    How can you enroll your child with us?
                </h1>

                <button type="button" class="btn btn-outline-light col-xs-6 col-md-2 d-flex justify-content-center">
                    FIND OUT NOW
                </button>
            </div>
        </div>
    );
}

export default Info;
