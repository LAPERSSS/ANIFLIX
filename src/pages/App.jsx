import { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarC from "../components/NavbarC.jsx";
import Jumbo from "../components/Jumbo.jsx";
import KotakMovie from "../components/KotakMovie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import SearchPage from "./Search/[keyword]/SearchPage";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 200 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // function search(anime) {
  //   for (let i = )
  // }

  function coba(data) {
    console.log(data);
  }

  return (
    <>
      <NavbarC coba={coba} />
      <Jumbo movie1="onePiece.png" movie2="KNY.jpeg" movie3="bnha.png" />
      <div className="m-3">
        <h2 className="mt-5 ms-5">TOP 10</h2>

        <Carousel responsive={responsive} swipeable={false} draggable={false}>
          <KotakMovie gambar={"bocchi.png"} animeId={"014"} />
          <KotakMovie gambar={"bnha.png"} animeId={"007"} />
          <KotakMovie gambar={"Bleach.jpg"} animeId={"006"} />
          <KotakMovie gambar={"naruto.jpg"} animeId={"013"} />
          <KotakMovie gambar={"SGate.png"} animeId={"003"} />
          <KotakMovie gambar={"TokyoGhoul.jpg"} animeId={"012"} />
          <KotakMovie gambar={"FMAB.png"} animeId={"010"} />
          <KotakMovie gambar={"DrStone.jpeg"} animeId={"008"} />
          <KotakMovie gambar={"FireForce.png"} animeId={"009"} />
          <KotakMovie gambar={"Bclover.png"} animeId={"005"} />
        </Carousel>
      </div>
    </>
  );
}

export default App;
