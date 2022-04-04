import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/homePage/homePage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Week1 from "./components/weeks/week1/week1";
import Week2 from "./components/weeks/week2/week2";
import Sidebar from "./components/sidebar/sidebar";
import About from "./components/about/about";
import Week3 from "./components/weeks/week3/week3";
import Week4 from "./components/weeks/week4/week4";
import Week5 from "./components/weeks/week5/week5";
import Week6 from "./components/weeks/week6/week6";
import Week7 from "./components/weeks/week7/week7";
import Week8 from "./components/weeks/week8/week8";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="week1" element={<Week1 />} />
        <Route path="week2" element={<Week2 />} />
        <Route path="week3" element={<Week3 />} />
        <Route path="week4" element={<Week4 />} />
        <Route path="week5" element={<Week5 />} />
        <Route path="week6" element={<Week6 />} />
        <Route path="week7" element={<Week7 />} />
        <Route path="week8" element={<Week8 />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
