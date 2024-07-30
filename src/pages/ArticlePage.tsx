import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ArticlePageHeader from "../components/ArticlePageHeader";
import ArticlePageContent from "../components/ArticlePageContent";
import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import  {articles,articles_en} from '../data/article';


function ArticlePage(){
    const { id } = useParams<{ id: string }>();
    const {t,i18n} = useTranslation();


    const articleId = parseInt(id!, 10);

    let article;
    if (i18n.language==="en"){
        article = articles_en.find(a => a.id === articleId);
    }
    else{
        article = articles.find(a => a.id === articleId);
    }


    useEffect(() => {

        // @ts-ignore
        window.initialize();





    }, []);

    return (

        <div className="App">
        <Spinner/>

        <Navbar/>
<ArticlePageHeader/>
            <ArticlePageContent title={article?.title!}  content={article?.content!} id={articleId} date={article?.date!} imageUrl={article?.imageUrl}/>
        <Footer/>

        <BackToTop/>





    </div>);

}

export default ArticlePage;