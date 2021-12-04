import React from 'react';

function ArticleItem(articleImg, title, description) {
    return (
        <div class="card col-4">
            <img class="card-img-top" src={articleImg} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
            </div>
        </div>
    )
}

export default ArticleItem
