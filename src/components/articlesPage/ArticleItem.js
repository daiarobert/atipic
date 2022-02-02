import React from 'react';

function ArticleItem(props) {
    return (
        <div class="card col-xs-12 col-sm-6 col-lg-4 d-flex justify-content-center align-items-center">
            <img
                class="card-img"
                src={
                    'https://media.istockphoto.com/photos/young-woman-reading-the-news-on-a-modern-tablet-computer-while-in-picture-id1177502660?b=1&k=20&m=1177502660&s=170667a&w=0&h=ROub8oDtheyx3xtHMjtU2FV6ZC7g2iSGX2qxme6388w='
                }
                alt="Card cap"
            />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <p class="card-text">{props.author}</p>
            </div>
        </div>
    );
}

export default ArticleItem;
