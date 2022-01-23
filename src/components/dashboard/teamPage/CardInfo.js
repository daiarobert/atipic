import React from 'react';

const CardInfo = (props) => {
    return (
        <div className={`card shadow-lg p-3 mb-5 bg-white rounded ${props.cardClassName}`}>
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
                {/* <p className="card-text">{props.name}</p> */}
                <img
                    src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    className="card-img-top justify-content-center mb-2"
                    alt="..."
                />
                <h5 className="card-title">{props.title}</h5>
            </div>

            <ul className="list-group list-group-flush ">
                <li className="list-group-item d-flex justify-content-between">
                    First Name: <div className="col-6 d-flex justify-content-end">{props.firstName}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Last Name: <div className="col-6 d-flex justify-content-end">{props.lastName}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Email: <div className="col-6 d-flex justify-content-end">{props.email}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Admin:
                    <div className="col-6 d-flex justify-content-end">{props.admin}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Role:
                    <div className="col-6 d-flex justify-content-end">{props.role}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Address:
                    <div className="col-6 d-flex justify-content-end">{props.address}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    Telephone:
                    <div className="col-6 d-flex justify-content-end">{props.telephone}</div>
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
