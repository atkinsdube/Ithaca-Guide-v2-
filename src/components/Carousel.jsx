import { useState, useEffect } from "react";

function Carousel({ images = [], auto = true, interval = 4000 }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  // Auto slide
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [auto, interval]);

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        <img
          src={images[index]}
          alt={`slide-${index}`}
          className="carousel-image"
        />
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
