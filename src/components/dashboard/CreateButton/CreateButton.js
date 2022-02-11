import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateButton = (props) => {
    return (
        <div className="row d-flex justify-content-end  p-4 g-0">
            <button className="btn-success rounded-3 col-xs-12 col-lg-2" onClick={props.onClick}>
                <FontAwesomeIcon icon={props.icon} className="icon"></FontAwesomeIcon>
            </button>
        </div>
    );
};
export default CreateButton;
