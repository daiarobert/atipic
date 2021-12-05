import React, {useState, useEffect} from 'react';
import './articles.scss';
import Axios from 'axios';
import ArticleItem from './ArticleItem';
import Title from '../title/Title';

function Articles() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () =>{
            const res = await Axios.get('https://newsapi.org/v2/top-headlines?country=ro&apiKey=7022cf4479294ee48bf872577ab5c7e7');

            setArticles(res.data.articles)
            console.log(res.data.articles);
        }
        getArticles();
    },[])

   
    return (
        <div className='row'>
            <div className='col-12 mb-5'>
                <Title title='Articole' />
            </div>
            <div className='row articles-wrapper'>
            {articles.map(article => (
                <ArticleItem title={article.title} articleImg={article.urlToImage} description={article.description}/>
        ))}
        </div>
        </div>
        
    )
}

export default Articles
