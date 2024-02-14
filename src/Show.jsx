import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import App from "./pages/App";
import TheMovie from "./pages/Anime/[keyword]/TheMovie";
import PlayMovie from "./pages/PlayMovie";
import SearchPage from "./pages/Search/[keyword]/SearchPage";

const Show = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path={`/Anime/:keyword`} element={<TheMovie />}></Route>
        <Route path="/playMovie" element={<PlayMovie />}></Route>
        <Route path={`/Search/:keyword`} element={<SearchPage />}></Route>
      </Routes>
    </Router>
  );
};

export default Show;
