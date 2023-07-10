import React from 'react';
import './Article.css';

const Article = ({ imgUrl, date, text }) => {
    return (
        <div className='article'>
            <div className='article-image'>
                <img src={imgUrl} alt='article-img' />
            </div>
            <div className='article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
}

export default Article;