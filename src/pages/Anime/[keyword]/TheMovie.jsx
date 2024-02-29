import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import animes from "../../../db";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import KotakMovie from "../../../components/KotakMovie";

function TheMovie() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 2,
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

  let animeName;
  let animeBg;
  let animeVideo;
  let animeEp;
  let animeSeason;
  const params = useParams();
  const navigate = useNavigate();

  let eps = [];
  let seasons = [];

  const [season, setSeason] = useState("1");
  const [episode, setEpisode] = useState(0);

  for (const anime of animes) {
    if (anime.id == params.keyword) {
      animeName = anime.name;
      animeBg = anime?.mainBg ?? "bg.mp4";
      animeEp = anime.season?.["season" + [season]].length ?? 1;
      animeVideo = anime.season?.["season" + [season]][episode] ?? "vid.MOV";
      animeSeason = anime?.season ?? { season1: [""] };
    }
  }
  const seasonCount = Object.keys(animeSeason);
  // console.log(seasonCount);

  for (let i = 0; i < seasonCount.length; i++) {
    seasons.push(<option value={`${i + 1}`}>season {i + 1}</option>);
  }

  for (let i = 0; i < animeEp; i++) {
    eps.push(
      <div
        className="kotakEps"
        onClick={() => {
          // console.log(i + 1);
          setEpisode(i);
        }}
      >
        {i + 1}
      </div>
    );
  }

  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    return (
      <div className="custom-button-group">
        {/* Custom left arrow */}
        <div className="arrow" style={{ position: "absolute", right: "7.2rem" }} onClick={() => previous()}>
          {"<"}
        </div>

        {/* Custom right arrow */}
        <div className="arrow" style={{ position: "absolute", left: "7rem" }} onClick={() => next()}>
          {">"}
        </div>
      </div>
    );
  };

  // src={`../../../../src/assets/${animeVideo}`}

  return (
    <>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <video muted autoPlay="autoPlay" loop src={`/ANIFLIX/${animeBg}`} style={{ width: "110%" }}></video>
      </div>

      <div className="movieLanding">
        <div className="movieLandingMenu" style={{ color: "white", backgroundColor: "black", padding: "7px", borderRadius: "10px" }}>
          {animeName}
        </div>
        <Form.Select
          className="movieLandingMenu"
          id="select"
          style={{ top: "100px", width: "7rem", margin: "0px" }}
          aria-label="Default select example"
          onChange={(e) => {
            const selected = e.target.value;
            setSeason(selected);
          }}
        >
          {seasons}
        </Form.Select>
        <div className="movieLandingMenu" style={{ width: "20rem", top: "200px", marginTop: "5rem" }}>
          <video controls src={`/ANIFLIX/${animeVideo}`} style={{ width: "100%" }}></video>
        </div>
      </div>
      <div style={{ width: "7rem", position: "absolute", left: "16.5rem", bottom: "21.5rem", zIndex: "10" }}>
        <Carousel responsive={responsive} arrows={false} swipeable={false} draggable={false} customButtonGroup={<CustomButtonGroup />} renderButtonGroupOutside={true}>
          {eps}
        </Carousel>
      </div>
    </>
  );
}

export default TheMovie;
