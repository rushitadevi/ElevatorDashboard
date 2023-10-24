import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { DashboardProvider1 } from "./context/DashboardProvider";
import LoginButton from "./pages/Login";
import AuthProvider from "./config/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DashboardProvider1>
        <Router>
          <Routes>
            <Route path="/" exact element={<LoginButton />} />
            <Route path="/logged-in" exact element={<Home />} />
          </Routes>
        </Router>
      </DashboardProvider1>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
