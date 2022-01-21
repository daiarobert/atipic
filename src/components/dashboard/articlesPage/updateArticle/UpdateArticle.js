import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getToken } from '../../../../utils/Common';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import SideNav from '../../sideNav/SideNav';
import Form from '../Form';

const UpdateArticle = () => {
    const history = useHistory();
    const [article, setArticle] = useState({});
    const [description, setDescription] = useState();
    const [title, setTitle] = useState();
    const [readMore, setReadMore] = useState();
    const [author, setAuthor] = useState();

    const { id } = useParams();
    const token = getToken();
    const headers = {
        token: `Bearer ${token}`,
    };

    useEffect(async () => {
        try {
            const res = await Axios.get(`http://localhost:5000/api/v1/articles/find/${id}`, {
                headers: { token: `Bearer ${token}` },
            });
            setArticle(res.data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const updateArticle = async () => {
        console.log(`Bearer ${token}`);
        try {
            const res = await Axios.put(
                `http://localhost:5000/api/v1/articles/${id}`,

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
        updateArticle();
    };

    return (
        <div className="update row d-flex g-0">
            <SideNav />
            <div className="col-sm-12 col-md-10">
                <div className="row g-0 justify-content-center align-items-center">
                    <div className=" col-12">
                        <div className="wrapper">
                            <Form
                                onSubmit={handleSubmit}
                                defaultValueDescription={article.description}
                                onChangeDescription={(e) => setDescription(e.target.value)}
                                defaultValueReadMore={article.readMore}
                                onChangeReadMore={(e) => setReadMore(e.target.value)}
                                defaultValueAuthor={article.author}
                                onChangeAuthor={(e) => setAuthor(e.target.value)}
                                defaultValueTitle={article.title}
                                onChangeTitle={(e) => setTitle(e.target.value)}
                                btnTitle="Update"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateArticle;
