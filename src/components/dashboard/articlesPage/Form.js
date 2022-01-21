import React from 'react';

const Card = (props) => {
    return (
        <div className={`card card-article ${props.cardClassName}`} style={{ height: '100%', maxHeight: '100%' }}>
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
                {/* <p className="card-text">{props.name}</p> */}
                {/* <img
          src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          className="card-img-top justify-content-center mb-2"
          alt="..."
        /> */}
                <form action="#" className="update-form" onSubmit={props.onSubmit}>
                    <div className="form-group mb-3">
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
                    <textarea
                        className="form-control form-control-lg mb-3"
                        rows="3"
                        placeholder="Title"
                        defaultValue={props.defaultValueTitle}
                        onChange={props.onChangeTitle}
                    ></textarea>
                    <textarea
                        className="form-control form-control-lg mb-3"
                        rows="5"
                        placeholder="Description"
                        defaultValue={props.defaultValueDescription}
                        onChange={props.onChangeDescription}
                    ></textarea>
                    <textarea
                        className="form-control form-control-lg mb-3"
                        rows="10"
                        placeholder="Article"
                        defaultValue={props.defaultValueReadMore}
                        onChange={props.onChangeReadMore}
                    ></textarea>

                    <div className="form-group mt-3">
                        <label className="form-control-placeholder" htmlFor="username">
                            Author:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            required=""
                            defaultValue={props.defaultValueAuthor}
                            onChange={props.onChangeAuthor}
                        />
                    </div>

                    <div className="form-group mt-4">
                        <button type="submit" className="form-control btn btn-primary rounded submit px-3">
                            {props.btnTitle}
                        </button>
                    </div>
                </form>
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    );
};
export default Card;
