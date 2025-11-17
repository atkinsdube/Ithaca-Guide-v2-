import { useState } from "react";

function Carousel({ images = [] }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={prev}>
        ‹
      </button>

      <img
        src={images[index]}
        alt="carousel"
        className="carousel-image"
      />

      <button className="carousel-btn" onClick={next}>
        ›
      </button>
    </div>
  );
}

export default Carousel;
