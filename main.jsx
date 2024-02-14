import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/pages/App.jsx";
import TheMovie from "./src/pages/Anime/[keyword]/TheMovie.jsx";
import Show from "./src/Show.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Show />
  </React.StrictMode>
);
