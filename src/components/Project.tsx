import React from 'react';
import {useTranslation} from 'react-i18next';
// 定义ProjectItemProps类型
interface ProjectItemProps {
    delay: string;
    imageSrc: string;
    link: string;
    title: string;
    description: string;
    updatePopTitle:Function;
    updatePopContent:Function;
    popupTitle:string;
    popupContent:string;

}

// 定义ProjectItem函数
function ProjectItem({delay, imageSrc, link, title, description,popupTitle,popupContent,updatePopTitle,updatePopContent}: ProjectItemProps) {
    function opepPopup () {

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
                    <img className="img-fluid w-100" src={imageSrc} alt={title}/>
                    <div className="portfolio-overlay">
                        <button className="btn btn-square btn-outline-light mx-1 popBtn"
                                onClick={opepPopup}>
                            <i className="fa fa-link"></i>
                        </button>
                    </div>
                </div>
                <div className="border border-5 border-light border-top-0 p-4 text-center">
                    <p className="text-primary fw-medium mb-2">{link}</p>
                    <h4 className="lh-base mb-0">{title}</h4>
                    <p className="lh-base mb-0">{description}</p>
                </div>
            </div>
        </div>
    );
}

// 示例组件，展示多个ProjectItem
function Project({ updateTitle, updateContent }:{ updateTitle:Function, updateContent:Function }) {

    const {t} = useTranslation();


    return (
        <div className="container-xxl py-5" id="project">
            <div className="container">
                <div className="text-center">
                    <h1 className="display-5 mb-5">{t('project-text-1')}</h1>
                </div>
                <div className="row g-4">
                    <ProjectItem
                        delay="0.1s"
                        imageSrc="img/project1.png"
                        link="www.lansus.com"
                        title={t('project-text-2')}
                        description={t('project-text-3')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-2')}
                        popupContent={t('project-text-4')}
                        />
                    <ProjectItem
                        delay="0.3s"
                        imageSrc="img/project2.png"
                        link="quantgrav.com"
                        title={t('project-text-5')}
                        description={t('project-text-6')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-5')}
                        popupContent={t('project-text-7')}
                        />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project3.png"
                        link="www.maicro.com"
                        title={t('project-text-8')}
                        description={t('project-text-9')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-8')}
                        popupContent={t('project-text-10')}
                        />
                    <ProjectItem
                        delay="0.1s"
                        imageSrc="img/project4.png"
                        link="www.raysees.com.cn"
                        title={t('project-text-11')}
                        description={t('project-text-12')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-11')}
                        popupContent={t('project-text-13')}
                        />
                    <ProjectItem
                        delay="0.3s"
                        imageSrc="img/project5.png"
                        link="www.chipsvision.com.cn"
                        title={t('project-text-14')}
                        description={t('project-text-15')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-14')}
                        popupContent={t('project-text-16')}
                        />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project7.png"
                        link="www.blacksesame.com.cn"
                        title={t('project-text-17')}
                        description={t('project-text-18')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-17')}
                        popupContent={t('project-text-19')}
                        />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project9.png"
                        link="www.novacoic.com"
                        title={t('project-text-20')}
                        description={t('project-text-21')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-20')}
                        popupContent={t('project-text-22')}
                        />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project10.png"
                        link="www.fortsense.com"
                        title={t('project-text-23')}
                        description={t('project-text-24')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-23')}
                        popupContent={t('project-text-25')}

                    />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project12.png"
                        link="www.onmicro.com.cn"
                        title={t('project-text-26')}
                        description={t('project-text-27')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-26')}
                        popupContent={t('project-text-28')}

                    />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project13.png"
                        link="www.siliconwaves.com"
                        title={t('project-text-29')}
                        description={t('project-text-30')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-29')}
                        popupContent={t('project-text-31')}

                    />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project16.png"
                        link="www.xdxct.com"
                        title={t('project-text-32')}
                        description={t('project-text-33')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-32')}
                        popupContent={t('project-text-34')}

                    />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project17.png"
                        link="www.sicred.cn"
                        title={t('project-text-35')}
                        description={t('project-text-36')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-35')}
                        popupContent={t('project-text-37')}

                    />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project18.png"
                        link="daxin-semi.com"
                        title={t('project-text-38')}
                        description={t('project-text-39')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-38')}
                        popupContent={t('project-text-40')}

                    />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project19.png"
                        link="www.joinsilicon.com"
                        title={t('project-text-41')}
                        description={t('project-text-42')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-41')}
                        popupContent={t('project-text-43')}

                    />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project20.png"
                        link=""
                        title={t('project-text-44')}
                        description={t('project-text-45')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-44')}
                        popupContent={t('project-text-46')}

                    />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project6.png"
                        link="www.summitcrystal.com"
                        title={t('project-text-47')}
                        description={t('project-text-48')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-47')}
                        popupContent={t('project-text-49')}
                        />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project8.png"
                        link="fjdeertech.com"
                        title={t('project-text-50')}
                        description={t('project-text-51')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-50')}
                        popupContent={t('project-text-52')}
                        />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project14.png"
                        link="www.csamq.com"
                        title={t('project-text-53')}
                        description={t('project-text-54')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-53')}
                        popupContent={t('project-text-55')}

                    />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project11.png"
                        link="www.cospowers.com"
                        title={t('project-text-56')}
                        description={t('project-text-57')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-56')}
                        popupContent={t('project-text-58')}

                    />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project15.png"
                        link="www.tykmedicines.com"
                        title={t('project-text-59')}
                        description={t('project-text-60')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-59')}
                        popupContent={t('project-text-61')}

                    />
                    <ProjectItem
                        delay="0.5s"
                        imageSrc="img/project21.png"
                        link="www.zhongkejihua.com"
                        title={t('project-text-62')}
                        description={t('project-text-63')}
                        updatePopContent={updateContent}
                        updatePopTitle={updateTitle}
                        popupTitle={t('project-text-62')}
                        popupContent={t('project-text-64')}

                    />
                </div>
            </div>
        </div>
    );
}

export default Project;
