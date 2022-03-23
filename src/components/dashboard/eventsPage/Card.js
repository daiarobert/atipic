import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const CardInfo = (props) => {
    const location = window.location.pathname;
    return (
        <div className={`card shadow p-3 mb-5 bg-white rounded ${props.cardClassName}`} style={{ maxHeight: '100%' }}>
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
                <label htmlFor="title" className="text-dark">
                    Title:
                </label>

                <textarea
                    className="form-control form-control-lg mb-3"
                    rows="1"
                    placeholder="Description"
                    defaultValue={props.title}
                    readOnly
                ></textarea>
            </div>

            {location === '/dashboard/events' ? (
                <div>
                    <label htmlFor="description" className="text-dark">
                        Description:
                    </label>
                    <textarea
                        className="form-control form-control-lg mb-3"
                        rows="4"
                        placeholder="Description"
                        defaultValue={props.defaultValueDescription}
                        onChange={props.onChangeDescription}
                        readOnly
                    ></textarea>
                    <label htmlFor="event" className="text-dark">
                        Event:
                    </label>
                    <textarea
                        className="form-control form-control-lg mb-3 "
                        rows="8"
                        placeholder="Event"
                        defaultValue={props.defaultValueReadMore}
                        onChange={props.onChangeReadMore}
                        readOnly
                    ></textarea>
                </div>
            ) : (
                <div>
                    <textarea
                        className="form-control form-control-lg mb-3"
                        rows="5"
                        placeholder="Description"
                        defaultValue={props.defaultValueDescription}
                        onChange={props.onChangeDescription}
                    ></textarea>
                    <textarea
                        className="form-control form-control-lg mb-3 "
                        rows="10"
                        placeholder="Event"
                        defaultValue={props.defaultValueReadMore}
                        onChange={props.onChangeReadMore}
                    ></textarea>
                </div>
            )}

            <ul className="list-group list-group-flush ">
                <li className="list-group-item d-flex justify-content-between">
                    Event Starting: <div className="col-6 d-flex justify-content-end">{props.startingEvent}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Event Ending: <div className="col-6 d-flex justify-content-end">{props.endingEvent}</div>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                    Created At: <div className="col-6 d-flex justify-content-end">{props.createdAt}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Updated At: <div className="col-6 d-flex justify-content-end">{props.updatedAt}</div>
                </li>
            </ul>

            <div className="card-body d-flex justify-content-center align-items-center p-0 mt-3">
                {' '}
                <button className="btn-edit rounded-2 col-5 m-1 " onClick={props.updateOnClick}>
                    <FontAwesomeIcon icon={faEdit} className="icon-edit"></FontAwesomeIcon>
                </button>{' '}
                <button className={`btn-delete rounded-2 col-5 ${props.classNameDelete}`} onClick={props.deleteOnClick}>
                    <a href="#" className="card-link">
                        <FontAwesomeIcon icon={faTrash} className="icon-delete"></FontAwesomeIcon>
                    </a>
                </button>
            </div>
        </div>
    );
};

export default CardInfo;
