import { useNavigate } from "react-router-dom";
// import {image} from "../../public/"

function KotakMovie(props) {
  const navigate = useNavigate();
  return (
    <>
      <div href="">
        <div
          style={{ backgroundImage: `url(/ANIFLIX/${props.gambar})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "25px" }}
          onClick={() => {
            navigate(`/Anime/${props.animeId}`);
            console.log(props.animeId);
          }}
          className="kotak"
        ></div>
      </div>
    </>
  );
}

export default KotakMovie;
