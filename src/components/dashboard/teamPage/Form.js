import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Form = (props) => {
    return (
        <div>
            <div className={`card-update shadow-lg p-3 mb-5 bg-white rounded ${props.cardClassName}`}>
                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                    {/* <p className="card-text">{props.name}</p> */}
                    {/* <img
            src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="card-img-top justify-content-center mb-2"
            alt="..."
          /> */}

                    <h5 className="card-title">{props.title}</h5>
                </div>

                <ul className="list-group list-group-flush ">
                    <form action="#" class="update-form" onSubmit={props.onSubmit} encType="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="image" className="text-dark">
                                Upload image
                            </label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                className="form-control-file "
                                onChange={props.onChangeImg}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-control-placeholder" htmlFor="username">
                                First Name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                required=""
                                onChange={props.onChangeFirstName}
                                //value={user.username}
                                defaultValue={props.defaultValueFirstName}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-control-placeholder" htmlFor="username">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                required=""
                                onChange={props.onChangeLastName}
                                //value={user.username}
                                defaultValue={props.defaultValueLastName}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-control-placeholder" htmlFor="username">
                                Email:
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                required=""
                                onChange={props.onChangeEmail}
                                defaultValue={props.defaultValueEmail}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-control-placeholder" htmlFor="authorization">
                                Authorization:
                            </label>

                            <select
                                className="form-select"
                                aria-label="admin"
                                required
                                onChange={props.onChangeIsAdmin}
                            >
                                <option selected disabled hidden value={props.defaultValueIsAdmin}>
                                    Select Authorization:
                                </option>
                                <option value={true}>Admin</option>
                                <option value={false}>Not Admin</option>
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-control-placeholder" htmlFor="username">
                                Role:
                            </label>

                            <select className="form-select" aria-label="role" required onChange={props.onChangeRole}>
                                <option selected disabled hidden value={props.defaultValueRole}>
                                    Select Role:
                                </option>
                                <option value="Coordinator">Coordinator</option>
                                <option value="Therapists">Therapists</option>
                                <option value="Volunteer">Volunteer</option>
                                <option value="Administrative">Administrative</option>
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-control-placeholder" htmlFor="username">
                                Address:
                            </label>
                            <textarea
                                className="form-control form-control-lg mb-3"
                                rows="1"
                                placeholder=""
                                onChange={props.onChangeAddress}
                                defaultValue={props.defaultValueAddress}
                            />
                            {/* <input
                                type="text"
                                className="form-control"
                                required=""
                                onChange={props.onChangeAddress}
                                defaultValue={props.defaultValueAddress}
                            /> */}
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-control-placeholder" htmlFor="username">
                                Telephone:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                required=""
                                onChange={props.onChangeTelephone}
                                defaultValue={props.defaultValueTelephone}
                            />
                        </div>

                        <div className="form-group mt-4">
                            <button className="btn-edit rounded-2 col-12 m-1 " onClick={props.updateOnClick}>
                                <FontAwesomeIcon icon={faEdit} className="icon-edit"></FontAwesomeIcon>
                            </button>
                        </div>
                    </form>
                </ul>
            </div>
        </div>
    );
};
export default Form;
