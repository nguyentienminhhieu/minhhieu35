import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home";
import NewsPage from "./News";
import ContactPage from "./Contact";

function Routine() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Comtact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>

    </Routes>
    </div>
  )
}

export default Routine