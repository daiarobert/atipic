import React from 'react';

const CreateButton = (props) => {
    return (
        <div className="row d-flex justify-content-end  p-4 g-0">
            <button className="btn-success rounded-3 col-xs-12 col-lg-2" onClick={props.onClick}>
                {props.title}
            </button>
        </div>
    );
};
export default CreateButton;
