import React from 'react';

interface PopupProps {

    title: string;
    content: string;

}

function Popup ({ title, content }:PopupProps)  {
    return (
        <div className="popup" id="popupContainer">
            <h2>{title}</h2>
            <div className="custom-scrollbar">
                <div className="scroll-content">
                    <p>{content}</p>
                </div>
            </div>
            <button className="btn btn-lg btn-primary rounded-0 popCloseBtn" onClick={toggle}>关闭</button>
        </div>
    );
};

function toggle(){
    const blur = document.getElementById('blur');
    if (blur) {
        blur.classList.toggle('active');
    }

    const popup = document.getElementById('popupContainer');
    if (popup) {
        popup.classList.toggle('active');
    }
    document.body.classList.remove("scroll-locked");
}




export default Popup;
