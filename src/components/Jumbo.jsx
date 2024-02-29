import Carousel from "react-bootstrap/Carousel";

function Jumbo(props) {
  return (
    <>
      <div className="p-4 bg-secondary-subtle">
        <Carousel>
          <Carousel.Item>
            <div className="carouselImg" style={{ backgroundImage: `url(/ANIFLIX/${props.movie1})` }}></div>
            <Carousel.Caption>
              <h3 className="carouselText">ONE PIECE</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carouselImg" style={{ backgroundImage: `url(/ANIFLIX/${props.movie2})` }}></div>
            <Carousel.Caption>
              <h3 className="carouselText">Demon Slayer</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carouselImg" style={{ backgroundImage: `url(/ANIFLIX/${props.movie3})` }}></div>
            <Carousel.Caption>
              <h3 className="carouselText">My Hero Academia</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Jumbo;
