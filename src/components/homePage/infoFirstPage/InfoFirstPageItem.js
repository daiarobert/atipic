import React from 'react';
//import InfoFirstPage from './InfoFirstPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoFirstPageItem = (props) => {
    return (
        <div className=" info col-xs-12  col-sm-12 col-md-4  justify-content-center">
            <div className={`circle mb-4 ${props.circleClass}`}>
                <FontAwesomeIcon icon={props.icon} className={`icons ${props.iconClass}`}></FontAwesomeIcon>
            </div>
            {/* <FontAwesomeIcon icon={faCircle} className='icons'></FontAwesomeIcon> */}

            <h5 className="m-4 text-center" style={{ maxWidth: '100%', height: '50px' }}>
                {props.title}
            </h5>
            <p className="description text-center" style={{ maxWidth: '100%', height: '100px' }}>
                {props.description}
            </p>

            {props.btnName ? (
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-primary w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                    >
                        {props.btnName}
                    </button>

                    <div
                        className="modal fade"
                        id="exampleModalCenter"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">
                                        {props.modalTitle}
                                    </h5>
                                    <button
                                        type="button"
                                        className="modal__close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">{props.modalBody}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {/* {props.btnName ? <button type='button' class="btn btn-outline-primary btn-read-more d-flex w-100 justify-content-center" href="/" data-toggle="modal" data-target="#exampleModalCenter">{props.btnName}</button>
                    
                : ''} */}
        </div>
    );
};

export default InfoFirstPageItem;
