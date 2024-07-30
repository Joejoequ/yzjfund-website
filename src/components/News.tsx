import React from 'react';
import {useTranslation} from 'react-i18next';
import {articles,articles_en} from "../data/article"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from 'react-router-dom';

function News() {

    const {t,i18n} = useTranslation();
    let sortedArticles;

    if (i18n.language==="en"){
        sortedArticles = [...articles_en].sort((a, b) => b.id - a.id);
    }
    else{
        sortedArticles = [...articles].sort((a, b) => b.id - a.id);
    }


    return (<div
        className="container-fluid bg-light overflow-hidden my-5 px-lg-0"
        id="news"
    >
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div
                    className="col-lg-6 feature-text py-5 wow fadeIn"
                    data-wow-delay="0.5s"
                >
                    <div className="p-lg-5 ps-lg-0">
                        <div className="text-start">
                            <h1 className="display-5 mb-4">新闻中心</h1>
                        </div>
                        <ul className="news-link">


                            {sortedArticles.map((article) => (
                                <li key={article.id}>

                                    <Link to={`/article/${article.id}`}>{"["+article.date+"] "+article.title.replace(/(\r\n|\n|\r)/gm, "")}</Link>
                                </li>
                            ))}



                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0" style={{minHeight: 400}}>
                    <div className="position-relative h-100">
                        <img
                            className="position-absolute img-fluid w-100 h-100 owl-lazy"
                            src="img/news.png"
                            style={{objectFit: "cover"}}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
export default News;