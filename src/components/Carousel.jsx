import { useState, useEffect } from "react";

function Carousel({ images = [], auto = true, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const hasImages = images.length > 0;

  const goToNext = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  // Auto slide
  useEffect(() => {
    if (!auto || images.length <= 1) return;

    const id = setInterval(goToNext, interval);
    return () => clearInterval(id);
  }, [auto, interval, images.length]);

  if (!hasImages) return null;

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        <img
          src={images[index].src}
          alt={images[index].alt}
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
