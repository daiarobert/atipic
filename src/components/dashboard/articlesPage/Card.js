import React from 'react';

const Card = (props) => {
    return (
        <div className="card-article shadow-lg p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body" style={{ minHeight: '500px' }}>
                <label htmlFor="title" className="text-dark">
                    Title:
                </label>
                <textarea
                    className="form-control form-control-lg mb-3"
                    rows="2"
                    placeholder="Description"
                    defaultValue={props.title}
                    readOnly
                ></textarea>
                <label htmlFor="description" className="text-dark">
                    Description:
                </label>
                <textarea
                    className="form-control form-control-lg mb-3"
                    rows="2"
                    placeholder="Description"
                    defaultValue={props.description}
                    readOnly
                ></textarea>
                <label htmlFor="article" className="text-dark">
                    Article:
                </label>
                <textarea
                    className="form-control form-control-lg mb-3 "
                    rows="3"
                    placeholder="Article"
                    defaultValue={props.article}
                    readOnly
                ></textarea>
                <li className="list-group-item d-flex justify-content-between">
                    Created At: <div className="col-6 d-flex justify-content-end">{props.createdAt}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Updated At: <div className="col-6 d-flex justify-content-end">{props.updatedAt}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Author: <div className="col-6 d-flex justify-content-end">{props.author}</div>
                </li>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center p-0 mt-3">
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
export default Card;
