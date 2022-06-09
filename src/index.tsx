import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GivePassAgain } from "./components/GivePassAgain";
import { Login } from "./components/Login";
import { GivePassAgainNew } from "./components/GivePassAgainNew";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { PageInf } from "./components/Dashboard/PageInf";
import { Device } from "./components/Device/Device";
import { Services } from "./components/Service/Services";
import { NumberOf } from "./components/NumberOf/NumberOf";
import { AddDevice } from "./components/Device/AddDevice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/info" element={<PageInf />} />
        <Route path="/device" element={<Device />} />
        <Route path="/add-device" element={<AddDevice />} />
        <Route path="/services" element={<Services />} />
        <Route path="/numberof" element={<NumberOf />} />
        <Route path="/quen-mat-khau" element={<GivePassAgain />} />
        <Route
          path="/login"
          element={<Login name="lequynhaivan01" password="12345678" />}
        />
        <Route path="/dat-lai-mat-khau" element={<GivePassAgainNew />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
