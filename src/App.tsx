import React, {useEffect, useState} from 'react';



import './App.css'
import IndexPage from './pages/IndexPage'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from 'react-router-dom';
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
function App(){



    return(

        <Router>
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>

    );
}
export default App;
