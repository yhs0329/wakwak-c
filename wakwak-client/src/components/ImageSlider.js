import React, { useState, useEffect, useCallback } from "react";
import "./css/ImageSlider.css";

const ImageSlider = () => {
  const images = [
    require("../assets/daeng1.png"),
    require("../assets/daeng2.png"),
    require("../assets/daeng3.png"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const handleNextClick = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
  }, [handleNextClick]);

  return (
    <div className="slider">
      <button className="arrow left" onClick={handlePrevClick}>
        &#10094;
      </button>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
      <button className="arrow right" onClick={handleNextClick}>
        &#10095;
      </button>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
