import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./sass/style.scss";
import SideMenu from "./components/sideMenus/sideMenu/SideMenu";
import { Overlay } from "./components/overlays/overlay";
import { Main } from "./components/main/main";
import { Navigation } from "./components/navigation/Navigation";
import { Footer } from "./components/footer/footer";
import { Contact } from "./components/contact/contact";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const ShowSideMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <SideMenu showMenu={showMenu} />
        <Overlay showMenu={showMenu} ShowSideMenu={ShowSideMenu} />
        <Routes>
          <Route extact path="/" element={<Main />} />
          <Route extact path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
