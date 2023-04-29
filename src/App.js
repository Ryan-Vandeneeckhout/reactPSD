import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./sass/style.scss";
import { Overlay } from "./components/overlays/overlay";
import { Main } from "./components/main/main";
import { Navigation } from "./components/navigation/Navigation";
import { Footer } from "./components/footer/footer";
import { Contact } from "./components/contact/contact";
import { Blog } from "./components/blog/blog";
import { SideMenuNavigation } from "./components/sideMenus/sideMenuNavigation/sideMenuNavigation";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const showSideMenuFunction = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navigation showSideMenuFunction={showSideMenuFunction} />
        </header>
        <SideMenuNavigation showMenu={showMenu} />
        <Overlay showMenu={showMenu} ShowSideMenu={showSideMenuFunction} />
        <Routes>
          <Route extact path="/" element={<Main />} />
          <Route extact path="/blog" element={<Blog />} />
          <Route extact path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
