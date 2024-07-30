import React from 'react';

function BackToTopButton  ()  {


    return (
        <button

            className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"
            onClick={(e) => {



                window.scrollTo({
                    top: 0,
                    behavior: 'auto', // 平滑滚动效果
                });
            }}
        >
            <i className="bi bi-arrow-up"></i>
        </button>
    );
};

export default BackToTopButton;
