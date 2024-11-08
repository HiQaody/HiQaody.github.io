import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";

import Home from "./views/Home";
import Service from "./views/Service";
import Projects from "./views/Projects";
import About from "./views/About";

function App() {
    return (
        <Router>
            <div className="bg-title">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/livres" element={<Service/>}/>
                    <Route path="/categories/:encodedCategory" element={<About/>}/>
                    <Route path="/videos" element={<Projects/>}/>
                    {/*<Route path="/login" element={<Login/>}/>*/}
                </Routes>
                {/*<Footer/>*/}
                {/*<Footer/>*/}
            </div>
        </Router>
    );
}

export default App;
