import Show from "../../../Show";
import { useParams } from "react-router-dom";
import NavbarC from "../../../components/NavbarC.jsx";
import animes from "../../../db";
import KotakMovie from "../../../components/KotakMovie";

const SearchPage = () => {
  const params = useParams();
  const names = params.keyword.toUpperCase();

  let anime = animes.filter((a) => a.name.indexOf(names) > -1);

  const kotak = [];

  for (let i = 0; i < anime.length; i++) {
    kotak.push(<KotakMovie gambar={`${anime[i].image}`} animeId={anime[i].id} />);
  }

  return (
    <>
      <div>
        <NavbarC />
        <div className="hasilSearchText">pencarian untuk "{params.keyword}"</div>
        <div className="bungkusSearch">
          <div className="animeSearch">{kotak}</div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
