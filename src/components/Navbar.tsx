import React, { useEffect } from 'react';

import {useTranslation} from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {

    const {t,i18n} = useTranslation();


    const currentLang=i18n.language;


    useEffect(() => {
        const handleScroll = () => {
            const stickyTop = document.querySelector('.sticky-top');
            if (stickyTop) {
                if (window.scrollY > 300) {
                    stickyTop.classList.add('shadow-sm');
                    (stickyTop as HTMLElement).style.top = '0px';
                } else {
                    stickyTop.classList.remove('shadow-sm');
                    (stickyTop as HTMLElement).style.top = '-100px';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // 清理事件监听器
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    function changeLanguage(lang: string) {


        i18n.changeLanguage(lang);
    }

    const whiteBackground = {
        backgroundColor: 'rgb(255,255,255)',

    };





    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a className="navbar-brand d-flex align-items-center px-4 px-lg-5" href="#">
                <img src="/img/logo.jpg" id="logo" className="mr-2" width="50" height="50" alt="logo"/>
                <img src="/img/logo1.jpg" id="logo1" className="mr-2" height="50" alt="logo1"/>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link smooth to="/" className="nav-item nav-link">{t('nav-text-1')}</Link>
                    <Link smooth to="/#about" className="nav-item nav-link">{t('nav-text-2')}</Link>
                    <Link smooth to="/#project" className="nav-item nav-link">{t('nav-text-3')}</Link>
                    <Link smooth to="/#news" className="nav-item nav-link">{t('nav-text-4')}</Link>
                    <Link smooth to="/#team" className="nav-item nav-link">{t('nav-text-5')}</Link>
                    <Link smooth to="/#history" className="nav-item nav-link">{t('nav-text-6')}</Link>
                    <Link smooth to="/#contact" className="nav-item nav-link">{t('nav-text-7')}</Link>


                    {currentLang === 'en' ? (
                        <button className="nav-item nav-link border-0" style={whiteBackground} onClick={() => i18n.changeLanguage('zh')}>中文</button>
                    ) : (
                        <button className="nav-item nav-link border-0" style={whiteBackground} onClick={() => i18n.changeLanguage('en')}>English</button>
                    )}

                </div>
            </div>
        </nav>
    );
}

export default Navbar;