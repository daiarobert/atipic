import React from 'react';

const Card = (props) => {
    return (
        <div className="card-article shadow-lg p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body" style={{ minHeight: '500px' }}>
                <p className="title">{props.title}</p>
                <div>{props.description}</div>
                <div className={`d-none ${props.readMoreClass}`}>{props.readMore}</div>
                <div className="author">{props.author}</div>
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
