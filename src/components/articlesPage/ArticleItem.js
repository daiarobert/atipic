import React from 'react';

function ArticleItem(props) {
    return (
        <div class="card col-xs-12 col-sm-6 col-lg-4 d-flex justify-content-center align-items-center">
            <img class="card-img-top" src={props.articleImg} alt="Card cap"/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
            </div>
        </div>
    )
}

export default ArticleItem
