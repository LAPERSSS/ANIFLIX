import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import TheMovie from "./pages/Anime/[keyword]/TheMovie.jsx";
import Show from "./Show";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Show />
  </React.StrictMode>
);
