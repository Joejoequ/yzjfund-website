import React from 'react';
import {useTranslation} from "react-i18next";

// 定义TeamMemberProps类型
interface TeamMemberProps {
    name: string;
    position: string;
    description: string;
    delay: string;
}

// 定义TeamMember函数组件
const TeamMember: React.FC<TeamMemberProps> = ({ name, position, description, delay }) => {
    return (
        <div className={`custom-col col-md-6 col-sm-12 wow fadeInUp team-margin`} data-wow-delay={delay}>
            <div className="team-item">
                <div className="text-center border border-5 border-light border-bottom-0 p-4 team-name">
                    <h5 className="mb-0">{name}</h5>
                    <small>{position}</small>
                </div>
                <div className="overflow-hidden position-relative text-center border border-5 border-light p-4 team-intro">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

// 使用TeamMember组件
const Team: React.FC = () => {

    const {t} = useTranslation();
    return (
        <div className="container-xxl py-5" id="team">
            <div className="container">
                <div className="text-center">
                    <h1 className="display-5 mb-5">{t("team-text-1")}</h1>
                </div>
                <div className="row 4" id="team-container">
                    <TeamMember
                        name={t("team-text-2")}
                        position={t("team-text-3")}
                        description={t("team-text-4")}
                        delay="0.1s"
                    />
                    <TeamMember
                        name={t("team-text-5")}
                        position={t("team-text-6")}
                        description={t("team-text-7")}
                        delay="0.1s"
                    />
                    <TeamMember
                        name={t("team-text-8")}
                        position={t("team-text-9")}
                        description={t("team-text-10")}
                        delay="0.1s"
                    />
                    <TeamMember
                        name={t("team-text-11")}
                        position={t("team-text-12")}
                        description={t("team-text-13")}
                        delay="0.1s"
                    />
                    <TeamMember
                        name={t("team-text-14")}
                        position={t("team-text-15")}
                        description={t("team-text-16")}
                        delay="0.1s"
                    />
                </div>
            </div>
        </div>
    );
};

export default Team;
