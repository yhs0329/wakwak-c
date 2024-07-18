import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const menus = [
    { name: "menu 1", submenus: ["서브1", "서브2", "서브3"] },
    { name: "menu 2", submenus: ["서브1", "서브2", "서브3"] },
    { name: "menu 3", submenus: ["서브1", "서브2", "서브3"] },
    { name: "menu 4", submenus: ["서브1", "서브2", "서브3"] },
    { name: "menu 5", submenus: ["서브1", "서브2", "서브3"] },
    { name: "menu 6", submenus: ["서브1", "서브2", "서브3"] },
  ];

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
      </main>
    </div>
  );
}

export default App;
