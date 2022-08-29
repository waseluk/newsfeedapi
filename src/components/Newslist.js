import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsList = () => {
    const [articles, setArticles] = useState([])
// get articles //
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://gnews.io/api/v4/top-headlines?token=8018388df98fe39c4741222a3e33a304&lang=en')
            console.log(response)
            setArticles(response.data.articles)
        }    
        getArticles()
        },[])
    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsItem
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                    )
            })}
        </div>
    )
}

export default NewsList