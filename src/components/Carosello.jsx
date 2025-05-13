import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  "src/assets/hamburger.jpg",
  "src/assets/imagebowl.png",
  "src/assets/pack.jpg",
  "src/assets/insalata.avif",
  "src/assets/image.png",
  "src/assets/bowl.avif",
  "src/assets/bicchieri.jpg",
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Carosello = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      showDots={false}
      arrows={false}
    >
      {images.map((imgSrc, index) => (
        <div key={index} style={{ padding: "0 10px" }}>
          <img
            src={imgSrc}
            alt={`slide-${index}`}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Carosello;
