
import React from 'react';

import { useTranslation } from 'react-i18next';
function ArticlePageHeader(){

    const { t } = useTranslation();
    return (

        <div className="container-fluid page-header py-5 mb-5">
            <div className="container py-5">
                <h1 className="display-3 text-white mb-3 animated slideInDown">{t('article-header-text-1')}</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-white active" aria-current="page">{t('article-header-text-2')}</li>

                        <li className="breadcrumb-item text-white active" aria-current="page">{t('article-header-text-1')}
                        </li>
                    </ol>
                </nav>
            </div>
        </div>


    );


}

export default ArticlePageHeader;