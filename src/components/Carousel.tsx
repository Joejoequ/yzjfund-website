

import React from 'react';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import { useTranslation } from 'react-i18next';


function Carousel() {

    const { t } = useTranslation();


    return (
        <div className="container-fluid p-0 pb-5" id="index">
            <div className="owl-carousel header-carousel position-relative">
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/carousel-1.jpg" alt=""/>
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                        style={{background: "rgba(53, 53, 53, .7)"}}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-8 text-center">
                                    <h1
                                        id="heading"
                                        className="display-3 text-white animated slideInDown mb-4"
                                    >
                                        {t('carousel-text-1')}
                                        <br/>
                                        {t('carousel-text-2')}
                                    </h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                        {t('carousel-text-3')}
                                    </p>
                                    <a
                                        href="#contact"
                                        className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                                    >
                                        {t('carousel-text-4')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;