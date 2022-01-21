import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { getToken } from '../../../../utils/Common';
import SideNav from '../../sideNav/SideNav';
import Form from '../Form';

const Create = () => {
    const history = useHistory();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [readMore, setReadMore] = useState();
    const [author, setAuthor] = useState();

    const createUser = async () => {
        const token = getToken();
        const headers = {
            token: `Bearer ${token}`,
        };

        try {
            const res = await Axios.post(
                `http://localhost:5000/api/v1/articles/admin/add`,

                {
                    title,
                    description,
                    readMore,
                    author,
                },
                { headers },
            );

            history.push('/articles');
        } catch (err) {
            console.log(err);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
    };

    return (
        <div className="create row g-0">
            <SideNav />
            <div className="col-sm-12 col-md-10">
                <div className="row g-0 justify-content-center align-items-center">
                    <div className=" col-12">
                        <div className="wrapper">
                            <Form
                                onSubmit={handleSubmit}
                                btnTitle="Create Article"
                                onChangeDescription={(e) => setDescription(e.target.value)}
                                onChangeReadMore={(e) => setReadMore(e.target.value)}
                                onChangeAuthor={(e) => setAuthor(e.target.value)}
                                onChangeTitle={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Create;
