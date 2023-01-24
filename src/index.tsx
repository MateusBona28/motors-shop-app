import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AnnouncementsProvider } from "./contexts/announcements";
import { UserProvider } from "./contexts/user";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ModalsProvider } from "./contexts/editModals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <AnnouncementsProvider>
        <UserProvider>
        <ModalsProvider>
          <App />
        </ModalsProvider>
        </UserProvider>
      </AnnouncementsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
