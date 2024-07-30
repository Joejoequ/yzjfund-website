import React from 'react';
import {useTranslation} from 'react-i18next';
function Footer(){

    const {t} = useTranslation();
    return (<div
        className="container-fluid bg-dark text-light footer pt-3 wow fadeIn"
        data-wow-delay="0.1s"
        style={{marginTop: "6rem"}}
    >
        <div className="container py-2">
            <div className="row g-3">
                <div className="col-lg-6 col-md-12">
                    <p className="mb-2">
                        <i className="fa fa-map-marker-alt me-3"/>
                        {t('footer-text-1')}
                    </p>
                </div>
                <div className="col-lg-3 col-md-12">
                    <p className="mb-2"/>
                </div>
                <div className="col-lg-3 col-md-12 text-lg-end">
                    <p className="mb-2">
                        <i className="fa fa-envelope me-3"/>
                        yangzijiang@yzjfund.com
                    </p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        ©{" "}
                        <a className="border-bottom" href="#">
                            {t('footer-text-2')}
                        </a>
                        , All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <a href="https://beian.miit.gov.cn/" target="_blank">
                            粤ICP备2023124140号-1
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;