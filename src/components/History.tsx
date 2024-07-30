import React from 'react';
import {useTranslation} from 'react-i18next';
// 定义HistoryItemProps类型
interface HistoryItemProps {
    delay: string;
    imageSrc: string;
    code: string;
    title: string;
    updatePopTitle:Function;
    updatePopContent:Function;
    popupTitle:string;
    popupContent:string;
}

// 定义HistoryItem函数组件
const HistoryItem: React.FC<HistoryItemProps> = ({ delay, imageSrc, code, title,popupTitle,popupContent,updatePopTitle,updatePopContent }:HistoryItemProps) => {
    function openPopup () {

        updatePopTitle(popupTitle);
        updatePopContent(popupContent);
        document.body.classList.add("scroll-locked");
        const blur = document.getElementById('blur');
        if (blur) {
            blur.classList.toggle('active');
        }

        const popup = document.getElementById('popupContainer');
        if (popup) {
            popup.classList.toggle('active');
        }
    }



    return (
        <div className={`col-lg-4 col-md-6 portfolio-item wow fadeInUp`} data-wow-delay={delay}>
            <div className="rounded overflow-hidden">
                <div className="position-relative overflow-hidden border border-5 border-light border-bottom-0">
                    <img className="img-fluid w-100" src={imageSrc} alt={title} />
                    <div className="portfolio-overlay">
                        <button className="btn btn-square btn-outline-light mx-1 popBtn" onClick={openPopup}>
                            <i className="fa fa-link"></i>
                        </button>
                    </div>
                </div>
                <div className="border border-5 border-light border-top-0 p-4 text-center">
                    <p className="text-primary fw-medium mb-2">{code}</p>
                    <h4 className="lh-base mb-0">{title}</h4>
                </div>
            </div>
        </div>
    );
};

// 使用HistoryItem组件
function History({ updateTitle, updateContent }:{ updateTitle:Function, updateContent:Function }){

    const {t} = useTranslation();
    return (
        <div className="container-xxl py-5" id="history">
            <div className="container">
                <div className="text-center">
                    <h1 className="display-5 mb-5">{t('history-text-1')}</h1>
                </div>
                <div className="row g-4">
                    <HistoryItem
                        delay="0.1s"
                        imageSrc="img/history1.png"
                        code="SH.688041"
                        title={t('history-text-2')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-3')}
                        popupContent={t('history-text-4')}

                    />
                    <HistoryItem
                        delay="0.3s"
                        imageSrc="img/history2.png"
                        code="SH.688234"
                        title={t('history-text-5')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-6')}
                        popupContent={t('history-text-7')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history3.png"
                        code="300403"
                        title={t('history-text-8')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-9')}
                        popupContent={t('history-text-10')}

                    />
                    <HistoryItem
                        delay="0.1s"
                        imageSrc="img/history4.png"
                        code="300622"
                        title={t('history-text-11')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-12')}
                        popupContent={t('history-text-13')}

                    />
                    <HistoryItem
                        delay="0.3s"
                        imageSrc="img/history5.png"
                        code="002740"
                        title={t('history-text-14')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-15')}
                        popupContent={t('history-text-16')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history6.png"
                        code="300503"
                        title={t('history-text-17')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-18')}
                        popupContent={t('history-text-19')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history7.png"
                        code="300568"
                        title={t('history-text-20')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-21')}
                        popupContent={t('history-text-22')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history8.png"
                        code="603309"
                        title={t('history-text-23')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-24')}
                        popupContent={t('history-text-25')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history9.png"
                        code="300595"
                        title={t('history-text-26')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-27')}
                        popupContent={t('history-text-28')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history10.png"
                        code="603858"
                        title={t('history-text-29')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-30')}
                        popupContent={t('history-text-31')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history11.png"
                        code="SH.688271"
                        title={t('history-text-32')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-33')}
                        popupContent={t('history-text-34')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history12.png"
                        code="SH.603279"
                        title={t('history-text-35')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-36')}
                        popupContent={t('history-text-37')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history13.jpg"
                        code="688183"
                        title={t('history-text-38')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-39')}
                        popupContent={t('history-text-40')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history14.jpg"
                        code="003040"
                        title={t('history-text-41')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-42')}
                        popupContent={t('history-text-43')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history15.png"
                        code="GUH，3247"
                        title={t('history-text-44')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-45')}
                        popupContent={t('history-text-46')}

                    />
                    <HistoryItem
                        delay="0.5s"
                        imageSrc="img/history16.png"
                        code="01359.HK"
                        title={t('history-text-47')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('history-text-48')}
                        popupContent={t('history-text-49')}

                    />
                </div>
            </div>
        </div>
    );
};

export default History;
