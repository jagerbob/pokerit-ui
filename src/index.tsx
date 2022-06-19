import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hub } from "./components/pages/hubs/Hub";
import { Aurora } from "./components/common/Aurora";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Aurora>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hubs" element={<Hub />}>
          <Route path=":hubId" element={<Hub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Aurora>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
