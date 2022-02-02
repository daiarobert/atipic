import React from 'react';

const Form = (props) => {
    return (
        <div>
            <div className={`card-update shadow-lg p-3 mb-5 bg-white rounded ${props.cardClassName}`}>
                <ul className="list-group list-group-flush ">
                    <form action="#" class="update-form " onSubmit={props.onSubmit}>
                        <div className="form-group mt-3">
                            <label className="form-control-placeholder" htmlFor="username">
                                Title:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                required=""
                                onChange={props.onChangeTitle}
                                //value={user.username}
                                defaultValue={props.defaultValueTitle}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-control-placeholder" htmlFor="username">
                                Starting Date:
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                required=""
                                onChange={props.onChangeStartingDate}
                                defaultValue={props.defaultValueStartingDate}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label className="form-control-placeholder" htmlFor="username">
                                Ending Date:
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                required=""
                                onChange={props.onChangeEndingDate}
                                defaultValue={props.defaultValueEndingDate}
                                value={props.valueEndingDate}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label className="form-control-placeholder" htmlFor="username">
                                Event Title:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                required=""
                                onChange={props.onChangeTitle}
                                //value={user.username}
                                defaultValue={props.defaultValueTitle}
                            />
                        </div>
                        <label htmlFor="description" className="text-dark">
                            Description:
                        </label>
                        <textarea
                            className="form-control form-control-lg mb-3"
                            rows="5"
                            placeholder="Description"
                            defaultValue={props.defaultValueDescription}
                            onChange={props.onChangeDescription}
                        ></textarea>
                        <label htmlFor="event" className="text-dark">
                            Event:
                        </label>
                        <textarea
                            className="form-control form-control-lg mb-3"
                            rows="5"
                            placeholder="Read More"
                            defaultValue={props.defaultValueReadMore}
                            onChange={props.onChangeReadMore}
                        ></textarea>

                        <div className="form-group mt-4">
                            <button type="submit" className="form-control btn btn-primary rounded submit px-3">
                                {props.btnTitle}
                            </button>
                        </div>
                    </form>
                </ul>
            </div>
        </div>
    );
};
export default Form;
