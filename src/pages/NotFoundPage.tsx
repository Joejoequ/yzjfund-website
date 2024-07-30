import React from 'react';
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import {useTranslation} from 'react-i18next';
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ArticlePageHeader from "../components/ArticlePageHeader";
import ArticlePageContent from "../components/ArticlePageContent";
import { HashLink as Link } from 'react-router-hash-link';

function NotFoundPage   (){


    const {t,i18n} = useTranslation();



    return (<div className="App">
        <Spinner/>

        <Navbar/>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">{t("notfound-text-1")}</h1>
                        <p className="mb-4">{t("notfound-text-2")}</p>

                        <Link smooth to="/" className="btn btn-primary py-3 px-5">{t('nav-text-1')}</Link>


                    </div>
                </div>
            </div>
        </div>
        <Footer/>

        <BackToTop/>


    </div>);

}


export default NotFoundPage;