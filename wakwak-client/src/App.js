import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import FirstBanner from "./components/FirstBanner";
import Review from "./components/Review";
import Guide from "./components/Guide";
import Location from "./components/Location";

function App() {
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const menus = [
    { name: "소개", submenus: ["introduce"] },
    {
      name: "가이드",
      submenus: [
        "wak guide1",
        "wak guide2",
        "wak guide3",
        "wak guide4",
        "wak guide5",
        "wak guide6",
      ],
    },
    { name: "가격안내", submenus: ["서브1", "서브2", "서브3"] },
    { name: "베스트 후기", submenus: ["서브1", "서브2", "서브3"] },
    { name: "직영점 문의", submenus: ["서브1", "서브2", "서브3"] },
    { name: "아카데미", submenus: ["서브1", "서브2", "서브3"] },
  ];

  const { ref: imageSliderRef, inView: imageSliderInView } = useInView({
    triggerOnce: true,
  });
  const { ref: firstBannerRef, inView: firstBannerInView } = useInView({
    triggerOnce: true,
  });
  const { ref: reviewRef, inView: reviewInView } = useInView({
    triggerOnce: true,
  });
  const { ref: guideRef, inView: guideInView } = useInView({
    triggerOnce: true,
  });
  const { ref: locationRef, inView: locationInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="App">
      <Header />
      <main>
        <nav
          onMouseEnter={() => setIsMenuHovered(true)}
          onMouseLeave={() => setIsMenuHovered(false)}
        >
          <ul className="menu">
            {menus.map((menu, index) => (
              <li key={index}>
                {menu.name}
                {isMenuHovered && (
                  <ul className="submenu">
                    {menu.submenus.map((submenu, subIndex) => (
                      <li key={subIndex}>{submenu}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div
          ref={imageSliderRef}
          className={`fade-in ${imageSliderInView ? "visible" : ""}`}
        >
          <ImageSlider />
        </div>
        <div
          ref={firstBannerRef}
          className={`fade-in ${firstBannerInView ? "visible" : ""}`}
        >
          <FirstBanner />
        </div>
        <div
          ref={reviewRef}
          className={`fade-in ${reviewInView ? "visible" : ""}`}
        >
          <Review />
        </div>
        <div
          ref={guideRef}
          className={`fade-in ${guideInView ? "visible" : ""}`}
        >
          <Guide />
        </div>
        <div
          ref={locationRef}
          className={`fade-in ${locationInView ? "visible" : ""}`}
        >
          <Location />
        </div>
      </main>
    </div>
  );
}

export default App;
