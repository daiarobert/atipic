import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { getToken } from '../../../utils/Common';
import './articles.scss';
import SideNav from '../sideNav/SideNav';
import CreateButton from '../CreateButton/CreateButton';
import Card from './Card';

const Articles = () => {
    const history = useHistory();
    const [articles, setArticles] = useState([]);

    useEffect(async () => {
        const token = getToken();
        try {
            const res = await Axios.get('https://atipic.herokuapp.com/api/v1/articles');
            setArticles(res.data);
            console.log(articles);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleDelete = async (id) => {
        const token = getToken();
        try {
            const res = await Axios.delete(`https://atipic.herokuapp.com/api/v1/articles/${id}`, {
                headers: {
                    token: `Bearer ${token}`,
                },
            });
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    const handleCreate = () => {
        history.push('/add/article');
    };
    return (
        <div className="article row g-0 ">
            <SideNav />
            <div className="col-sm-12 col-md-9 " style={{ margin: 'auto' }}>
                <CreateButton title={'Create Article'} onClick={handleCreate} />

                <div className="row p-3 g-0">
                    {articles.map((data, key) => {
                        return (
                            <div className="col-md-12 col-lg-6 col-xl-4 p-2 g-0" key={key}>
                                <Card
                                    title={data.title}
                                    description={data.description}
                                    author={data.author}
                                    updateOnClick={() => history.push(`/update/articles/${data._id}`)}
                                    deleteOnClick={() => handleDelete(data._id)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Articles;
