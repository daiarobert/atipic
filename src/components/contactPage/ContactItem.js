import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactItem(props) {
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 text-center mb-5 ">
            <FontAwesomeIcon icon={props.icon} className="icons"></FontAwesomeIcon>
            <h5 className="pb-4">{props.title}</h5>
            <p>
                <strong>{props.paragraph1}</strong>
            </p>
            <p>
                <strong>{props.paragraph2}</strong>
            </p>
        </div>
    );
}

export default ContactItem;
