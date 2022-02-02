import React, { useState, useEffect } from 'react';
import './articles.scss';
import Axios from 'axios';
import ArticleItem from './ArticleItem';
import Title from '../title/Title';
import Navbar from '../navbar/navbar';
import Footer from '../footer/Footer';

function Articles() {
    const [articles, setArticles] = useState([]);
    //const apiKey = '208768ae46bb6b48c1fe540952be7b79'
    useEffect(() => {
        const getArticles = async () => {
            const res = await Axios.get(`https://atipic.herokuapp.com/api/v1/articles`);
            // const res = await Axios.get(`//api.mediastack.com/v1/news?access_key=${apiKey}&categories=health`);
            // const res = await Axios.get('https://newsapi.org/v2/top-headlines?country=ro&apiKey=7022cf4479294ee48bf872577ab5c7e7');

            setArticles(res.data);
            console.log(res);
            console.log(res.data);
        };
        getArticles();
    }, []);

    return (
        <div className="col">
            <Navbar />
            <div className="col-12 mb-5">
                <Title title="Articole" />
            </div>
            <div className="row articles-wrapper">
                {articles.map((article) => (
                    <ArticleItem
                        title={article.title}
                        articleImg={article.image}
                        description={article.description}
                        author={article.author}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Articles;
