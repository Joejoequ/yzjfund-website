import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import News from "../components/News";
import About from "../components/About";
import Project from "../components/Project";
import Team from "../components/Team";
import History from "../components/History";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Popup from "../components/Popup";
import React, {useEffect, useState} from 'react';


function IndexPage() {

    useEffect(() => {

        const script = document.createElement('script');
        script.src = 'https://webapi.amap.com/maps?v=1.3&key=c82507d63102309828f81c0465f558d9&callback=onLoad';
        script.type = 'text/javascript';
        script.async = true;

        // @ts-ignore
        window.initialize();

        // @ts-ignore
        window.onLoad = function () {
            // @ts-ignore
            window.mapInitialize();}

        document.body.appendChild(script);

    }, []);



    const [popupTitle, setPopupTitle] = useState('');
    const [popupContent, setPopupContent] = useState('');



    return (
        <div className="App">



            <Spinner/>

            <Navbar/>
            <div id="blur">
                <Carousel/>
                <About/>
                <img src="/img/baidu.jpg" style={{display: "none"}}/>
                <Project updateContent={setPopupContent} updateTitle={setPopupTitle}/>
                <News/>
                <Team/>
                <History updateContent={setPopupContent} updateTitle={setPopupTitle}/>
                <Contact/>


                <Footer/>

                <BackToTop/>


            </div>

            <Popup title={popupTitle} content={popupContent}/>
        </div>
    );
}

export default IndexPage;