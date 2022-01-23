import React from 'react';

const CardInfo = (props) => {
    const location = window.location.pathname;
    return (
        <div className={`card shadow p-3 mb-5 bg-white rounded ${props.cardClassName}`} style={{ maxHeight: '100%' }}>
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
                <h5 className="card-title">{props.title}</h5>
            </div>

            {location === '/dashboard/events' ? (
                <div>
                    <textarea
                        className="form-control form-control-lg mb-3"
                        rows="4"
                        placeholder="Description"
                        defaultValue={props.defaultValueDescription}
                        onChange={props.onChangeDescription}
                        readOnly
                    ></textarea>
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
                <button className="btn-outline-info rounded-2 col-5 m-1 " onClick={props.updateOnClick}>
                    Update
                </button>{' '}
                <button
                    className={`btn-outline-danger rounded-2 col-5 ${props.classNameDelete}`}
                    onClick={props.deleteOnClick}
                >
                    <a href="#" className="card-link">
                        Delete
                    </a>
                </button>
            </div>
        </div>
    );
};

export default CardInfo;
